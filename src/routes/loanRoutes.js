const { Router } = require("express");
const loanControllers = require("../controllers/loanControllers");

const route = Router();

const routes = (app) => {
  app.use("/loans", route);

  route.get("/", loanControllers.list);
  route.post("/", loanControllers.create);
};

module.exports = routes;
