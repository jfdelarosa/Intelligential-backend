const { Op } = require("sequelize");
const { Book, Loan, BookLoan } = require("../models");

const findBook = async (id) => {
  const book = await Book.findByPk(id, {
    include: [
      {
        model: Loan,
        as: "loans",
      },
    ],
  });

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
  search: async (query) => {
    return await Book.findAll({
      where: {
        name: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });
  },
  update: async (id, body) => {
    try {
      const book = await findBook(id);

      return await book.update(body);
    } catch (error) {
      throw new Error(error);
    }
  },
  remove: async (id) => {
    try {
      const book = await findBook(id);

      await BookLoan.destroy({ where: { bookId: id } });

      return await book.destroy();
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = bookServices;
