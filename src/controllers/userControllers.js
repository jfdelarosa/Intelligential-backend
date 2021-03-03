const userServices = require("../services/userServices");

const userControllers = {
  list: async (req, res, next) => {
    try {
      const users = await userServices.list();

      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },
  find: async (req, res, next) => {
    try {
      const { id } = req.params;

      const user = await userServices.find(id);

      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;

      const user = await userServices.update(id, req.body);

      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userControllers;
