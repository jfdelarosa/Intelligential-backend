const { Router } = require("express");
const authMiddleware = require("../middlewares/auth");
const loanControllers = require("../controllers/loanControllers");

const route = Router();

const routes = (app) => {
  app.use("/loans", route);

  route.get("/", authMiddleware, loanControllers.list);
  route.post("/", authMiddleware, loanControllers.create);
};

module.exports = routes;
