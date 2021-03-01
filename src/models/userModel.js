const bcrypt = require("bcrypt");
const config = require("../config");

const UserModel = ({ sequelize, DataTypes }) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        default: "reader",
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  const setPassword = async function (user) {
    if (user.changed("password")) {
      const salt = bcrypt.genSaltSync(config.salt_factor);

      user.password = bcrypt.hashSync(user.password, salt);
    }
  };

  User.prototype.comparePasswords = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  User.beforeCreate(setPassword);
  User.beforeUpdate(setPassword);

  return User;
};

module.exports = UserModel;
