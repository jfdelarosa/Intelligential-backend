const { Router } = require("express");

const auth = require("./authRoutes");
const book = require("./bookRoutes");
const loan = require("./loanRoutes");
const user = require("./userRoutes");

const initRoutes = () => {
  const app = Router();

  const routes = [auth, book, loan, user];

  routes.forEach((route) => {
    route(app);
  });

  return app;
};

module.exports = initRoutes;
