if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  const env = dotenv.config();
  if (env.error) {
    throw new Error("Not .env file found");
  }
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

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
    connection_url:
      process.env.NODE_ENV === "production"
        ? `${process.env.DATABASE_URL}?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory`
        : process.env.DATABASE_URL,
    dialect: "postgres",
  },
  salt_factor: 10,
};
