const LoanModel = ({ Sequelize, sequelize, DataTypes }) => {
  const Loan = sequelize.define("Loan", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      default: Sequelize.NOW,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  });

  Loan.associate = (models) => {
    Loan.hasMany(models.Book);
  };

  return Loan;
};

module.exports = LoanModel;
