const { Router } = require("express");

const route = Router();

const routes = (app) => {
  app.use("/users", route);

  route.get("/", (req, res, next) => {
    return res.status(200).json({ hello: "world" });
  });
};

module.exports = routes;
