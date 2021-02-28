const expressLoader = require("./express");

const createApp = async (app) => {
  await expressLoader(app);
};

module.exports = createApp;
