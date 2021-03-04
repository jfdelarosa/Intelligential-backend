const { Router } = require("express");
const authMiddleware = require("../middlewares/auth");
const userControllers = require("../controllers/userControllers");

const route = Router();

const routes = (app) => {
  app.use("/users", route);

  route.get("/", authMiddleware, userControllers.list);
  route.get("/me", authMiddleware, userControllers.findMe);
  route.get("/:id", authMiddleware, userControllers.find);
  route.put("/:id", authMiddleware, userControllers.update);
};

module.exports = routes;
