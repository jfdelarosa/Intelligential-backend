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
        default: Sequelize.NOW,
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
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
  };

  return Loan;
};

module.exports = LoanModel;
