const dotenv = require("dotenv");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const env = dotenv.config();

if (env.error) {
  throw new Error("Not .env file found");
}

module.exports = {
  port: process.env.PORT || 3000,
  api: {
    prefix: "/api/v1",
  },
};
