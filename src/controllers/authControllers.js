const authServices = require("../services/authServices");

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

      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authControllers;
