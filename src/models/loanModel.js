const LoanModel = ({ Sequelize, sequelize, DataTypes }) => {
  const Loan = sequelize.define(
    "Loan",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      startDate: {
        type: DataTypes.DATEONLY,
      },
      endDate: {
        type: DataTypes.DATEONLY,
      },
      approved: {
        type: DataTypes.BOOLEAN,
      },
      returned: {
        type: DataTypes.BOOLEAN,
      },
    },
    {}
  );

  Loan.associate = (models) => {
    Loan.belongsToMany(models.Book, {
      through: "BookLoan",
      foreignKey: "loanId",
      as: "books",
    });

    Loan.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  };

  return Loan;
};

module.exports = LoanModel;
