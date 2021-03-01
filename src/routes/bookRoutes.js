const { Router } = require("express");
const bookControllers = require("../controllers/bookControllers");

const route = Router();

const routes = (app) => {
  app.use("/books", route);

  route.post("/", bookControllers.create);
  route.get("/", bookControllers.list);
  route.get("/:id", bookControllers.find);
  route.put("/:id", bookControllers.update);
  route.delete("/:id", bookControllers.remove);
};

module.exports = routes;
