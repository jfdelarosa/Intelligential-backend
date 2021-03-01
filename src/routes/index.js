const { Router } = require("express");

const book = require("./bookRoutes");
const user = require("./userRoutes");

const initRoutes = () => {
  const app = Router();

  const routes = [book, user];

  routes.forEach((route) => {
    route(app);
  });

  return app;
};

module.exports = initRoutes;
