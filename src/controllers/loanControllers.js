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
  create: async (req, res, next) => {
    try {
      const { books } = req.body;

      const loan = await loanServices.create(books);

      return res.status(201).json(loan);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = loanControllers;
