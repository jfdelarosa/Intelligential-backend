const UserModel = ({ sequelize, DataTypes }) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      default: "reader",
    },
  });

  return User;
};

module.exports = UserModel;
