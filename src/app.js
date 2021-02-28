const express = require("express");
const config = require("./config");
const loaders = require("./loaders");

async function startServer() {
  const app = express();

  await loaders(app);

  app.listen(config.port, () => {
    console.log(`Running on port: ${config.port}`);
  });

  app.on("error", (err) => {
    console.log(`Error: ${err}`);
    process.exit(1);
  });
}

startServer();
