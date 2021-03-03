const { User } = require("../models");

const findUser = async (id) => {
  const user = await User.findByPk(id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

const userServices = {
  list: async () => {
    try {
      return await User.findAll();
    } catch (error) {
      throw new Error(error);
    }
  },
  find: async (id) => {
    try {
      const user = await findUser(id);

      return user;
    } catch (error) {
      throw new Error(error);
    }
  },
  update: async (id, body) => {
    try {
      const user = await findUser(id);

      return await user.update(body);
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = userServices;
