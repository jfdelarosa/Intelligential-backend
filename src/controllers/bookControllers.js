const bookServices = require("../services/bookServices");

const bookControllers = {
  create: async (req, res, next) => {
    try {
      const { name } = req.body;

      const book = await bookServices.create({ name });

      return res.status(201).json(book);
    } catch (error) {
      next(error);
    }
  },
  list: async (req, res, next) => {
    try {
      const books = await bookServices.list();

      return res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  },
  find: async (req, res, next) => {
    try {
      const { id } = req.params;

      const book = await bookServices.find(id);

      return res.status(200).json(book);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    const { id } = req.params;

    const book = await bookServices.update(id, req.body);

    return res.status(200).json(book);
  },
  remove: async (req, res, next) => {
    try {
      const { id } = req.params;

      const book = await bookServices.remove(id);

      return res.status(200).json(book);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = bookControllers;
