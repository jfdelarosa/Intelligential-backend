const BookModel = ({ sequelize, DataTypes }) => {
  const Book = sequelize.define(
    "Book",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
    },
    {}
  );

  Book.associate = (models) => {
    Book.belongsToMany(models.Loan, {
      through: "BookLoan",
      foreignKey: "bookId",
      as: "loans",
    });
  };

  return Book;
};

module.exports = BookModel;
