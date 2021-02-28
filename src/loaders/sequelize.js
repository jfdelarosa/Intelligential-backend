const models = require("../models");

module.exports = sequelizeLoader = async () => {
  await models.sequelize.sync({ force: true });
};
