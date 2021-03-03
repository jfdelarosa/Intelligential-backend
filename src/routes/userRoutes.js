const { Router } = require("express");
const userControllers = require("../controllers/userControllers");

const route = Router();

const routes = (app) => {
  app.use("/users", route);

  route.get("/", userControllers.list);
  route.get("/:id", userControllers.find);
  route.put("/:id", userControllers.update);
};

module.exports = routes;
