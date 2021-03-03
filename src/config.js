const dotenv = require("dotenv");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const env = dotenv.config();

if (env.error) {
  throw new Error("Not .env file found");
}

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 8000,
  api: {
    prefix: "/api/v1",
  },
  jwt: {
    secret: process.env.SECRET,
    expiration: 172800,
  },
  db: {
    connection_url: process.env.DATABASE_URL,
    dialect: "postgres",
  },
  salt_factor: 10,
};
