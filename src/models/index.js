const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../config");

const basename = path.basename(__filename);
const db = {};

const sequelizeConfig = {
  dialect: config.db.dialect,
};

let sequelize = new Sequelize(config.db.connection_url, sequelizeConfig);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))({
      Sequelize,
      sequelize,
      DataTypes: Sequelize.DataTypes,
    });
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
