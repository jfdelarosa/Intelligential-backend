const { Router } = require("express");

const user = require("./usersRoutes");

const initRoutes = () => {
  const app = Router();

  user(app);

  return app;
};

module.exports = initRoutes;
