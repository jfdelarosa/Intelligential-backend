const { Router } = require("express");
const authMiddleware = require("../middlewares/auth");
const loanControllers = require("../controllers/loanControllers");

const route = Router();

const routes = (app) => {
  app.use("/loans", route);

  route.get("/", authMiddleware, loanControllers.list);
  route.get("/type", authMiddleware, loanControllers.listByType);
  route.get("/my", authMiddleware, loanControllers.listByUser);
  route.post("/", authMiddleware, loanControllers.create);
  route.put("/:id", authMiddleware, loanControllers.update);
};

module.exports = routes;
