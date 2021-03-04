const { Op } = require("sequelize");
const { User, Book, Loan, BookLoan } = require("../models");

const loanServices = {
  list: async () => {
    try {
      return await Loan.findAll({
        include: [{ model: Book, as: "books" }],
      });
    } catch (error) {
      throw new Error(error);
    }
  },
  listByType: async (pending = "true", user_id = null) => {
    try {
      const where = {};

      switch (pending) {
        case "true":
          where.approved = {
            [Op.is]: null,
          };
          break;
        case "false":
          where.approved = {
            [Op.not]: null,
          };
          break;
        case "current":
          where.startDate = {
            [Op.lte]: Date.now(),
          };

          where.endDate = {
            [Op.gte]: Date.now(),
          };

          where.returned = false;
          where.approved = true;
          break;
      }

      if (user_id) {
        where.userId = user_id;
      }

      const loans = await Loan.findAll({
        where,
        include: [
          { model: Book, as: "books", attributes: ["id", "name", "author"] },
          { model: User, as: "user", attributes: ["id", "email"] },
        ],
        order: [["updatedAt", "DESC"]],
      });

      return loans;
    } catch (error) {
      throw new Error(error);
    }
  },
  create: async (userId, books) => {
    try {
      const { count } = BookLoan.findAndCountAll({
        where: {
          bookId: books,
        },
      });

      if (count) {
        throw new Error("Book is already requested");
      }

      const newLoan = await Loan.create({
        returned: false,
        userId,
      });

      await Book.update(
        {
          stock: false,
        },
        {
          where: {
            id: books,
          },
        }
      );

      books = books.map((bookId) => {
        return { bookId, loanId: newLoan.id };
      });

      await BookLoan.bulkCreate(books);

      return newLoan;
    } catch (error) {
      throw new Error(error);
    }
  },
  update: async (id, body) => {
    try {
      const loan = await Loan.findByPk(id, {
        include: {
          model: Book,
          as: "books",
          attributes: ["id"],
        },
      });

      if (!loan) {
        throw new Error("Loan not found");
      }

      if (body.approved === false || body.returned === true) {
        await Book.update(
          { stock: true },
          {
            where: {
              id: loan.books.map((book) => {
                return book.id;
              }),
            },
          }
        );
      }

      return await loan.update(body);
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = loanServices;
