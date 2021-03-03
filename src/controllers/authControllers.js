const jwt = require("jsonwebtoken");
const authServices = require("../services/authServices");
const config = require("../config");

const authControllers = {
  register: async (req, res, next) => {
    try {
      const user = await authServices.register(req.body);

      return res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const user = await authServices.login(req.body);

      const token = jwt.sign({ user }, config.jwt.secret, {
        expiresIn: config.jwt.expiration,
      });

      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authControllers;
