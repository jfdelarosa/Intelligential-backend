const express = require("express");
const cors = require("cors");
const routes = require("../routes");
const config = require("../config");

const expressLoader = async (app) => {
  app.use(cors());

  app.use(express.json({ extended: true }));

  app.use(config.api.prefix, routes());

  app.use((req, res, next) => {
    const err = new Error("Route not Found");
    err["status"] = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};

module.exports = expressLoader;
