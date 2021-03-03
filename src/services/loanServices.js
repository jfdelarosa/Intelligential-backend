const { Book, Loan, BookLoan } = require("../models");

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
  create: async (books) => {
    try {
      const newLoan = await Loan.create({
        startDate: Date.now(),
        endDate: Date.now(),
      });

      books = books.map((bookId) => {
        return { bookId, loanId: newLoan.id };
      });

      await BookLoan.bulkCreate(books);

      return newLoan;
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = loanServices;
