const expressLoader = require("./express");
const sequelizeLoader = require("./sequelize");

const createApp = async (app) => {
  await expressLoader(app);
  await sequelizeLoader();
};

module.exports = createApp;
