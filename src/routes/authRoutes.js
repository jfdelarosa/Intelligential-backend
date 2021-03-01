const { Router } = require("express");
const authControllers = require("../controllers/authControllers");

const route = Router();

const routes = (app) => {
  app.use("/auth", route);

  route.post("/register", authControllers.register);
  route.post("/login", authControllers.login);
};

module.exports = routes;
