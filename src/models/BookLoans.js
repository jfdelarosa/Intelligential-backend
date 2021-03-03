const BookLoanModel = ({ sequelize, DataTypes }) => {
  const BookLoan = sequelize.define(
    "BookLoan",
    {
      bookId: {
        type: DataTypes.UUID,
      },
      loanId: {
        type: DataTypes.STRING,
      },
    },
    {}
  );

  // Book.associate = (models) => {
  //   Book.belongsToMany(models.Loan, {through: ""});
  // };

  BookLoan.associate = (models) => {
    BookLoan.belongsTo(models.Book, { foreignKey: "bookId" });
    BookLoan.belongsTo(models.Loan, { foreignKey: "loanId" });
  };

  return BookLoan;
};

module.exports = BookLoanModel;
