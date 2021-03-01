const { Book } = require("../models");

const findBook = async (id) => {
  const book = await Book.findByPk(id);

  if (!book) {
    throw new Error("Book not found");
  }

  return book;
};

const bookServices = {
  create: async ({ name }) => {
    try {
      return await Book.create({ name });
    } catch (error) {
      throw new Error(error);
    }
  },
  list: async () => {
    try {
      return await Book.findAll();
    } catch (error) {
      throw new Error(error);
    }
  },
  find: async (id) => {
    try {
      return await findBook(id);
    } catch (error) {
      throw new Error(error);
    }
  },
  update: async (id, body) => {
    try {
      const book = await findBook(id);

      return await book.update(body);
    } catch (error) {
      next(error);
    }
  },
  remove: async (id) => {
    try {
      const book = await findBook(id);

      return await book.destroy();
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = bookServices;
