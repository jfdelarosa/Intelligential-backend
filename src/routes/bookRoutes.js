const { Router } = require("express");
const authMiddleware = require("../middlewares/auth");
const bookControllers = require("../controllers/bookControllers");

const route = Router();

const routes = (app) => {
  app.use("/books", route);

  route.post("/", authMiddleware, bookControllers.create);
  route.get("/", authMiddleware, bookControllers.list);
  route.get("/search", authMiddleware, bookControllers.search);
  route.get("/:id", authMiddleware, bookControllers.find);
  route.put("/:id", authMiddleware, bookControllers.update);
  route.delete("/:id", authMiddleware, bookControllers.remove);
};

module.exports = routes;
