const express = require("express");

async function startServer() {
  const app = express();

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Running on port: ${port}`);
  });

  app.on("error", (err) => {
    console.log(`Error: ${err}`);
    process.exit(1);
  });
}

startServer();
