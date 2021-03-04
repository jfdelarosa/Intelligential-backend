const loanServices = require("../services/loanServices");

const loanControllers = {
  list: async (req, res, next) => {
    try {
      const loans = await loanServices.list();

      return res.status(200).json(loans);
    } catch (error) {
      next(error);
    }
  },
  listByType: async (req, res, next) => {
    try {
      const { pending } = req.query;

      const loans = await loanServices.listByType(pending);

      return res.status(200).json(loans);
    } catch (error) {
      next(error);
    }
  },
  listByUser: async (req, res, next) => {
    try {
      const { user_id } = req;
      const { pending } = req.query;

      const loans = await loanServices.listByType(pending, user_id);

      return res.status(200).json(loans);
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const { user_id } = req;
      const { books } = req.body;

      const loan = await loanServices.create(user_id, books);

      return res.status(201).json(loan);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;

      const loan = await loanServices.update(id, req.body);

      return res.status(200).json(loan);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = loanControllers;
