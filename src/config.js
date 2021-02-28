const dotenv = require("dotenv");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const env = dotenv.config();

if (env.error) {
  throw new Error("Not .env file found");
}

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  api: {
    prefix: "/api/v1",
  },
  db: {
    name: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    pass: process.env.DATABASE_PASS,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
  },
};
