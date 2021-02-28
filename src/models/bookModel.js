const BookModel = ({ sequelize, DataTypes }) => {
  const Book = sequelize.define("Book", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Book;
};

module.exports = BookModel;
