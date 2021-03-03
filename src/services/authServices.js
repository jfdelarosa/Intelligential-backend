const { User } = require("../models");

const authServices = {
  register: async (body) => {
    try {
      return await User.create(body);
    } catch (error) {
      throw new Error(error);
    }
  },
  login: async ({ email, password }) => {
    try {
      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        throw new Error("Invalid credentials");
      }

      const isMatch = await user.comparePasswords(password);

      if (isMatch) {
        delete user.password;
        return user;
      }

      throw new Error("Invalid credentials");
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = authServices;
