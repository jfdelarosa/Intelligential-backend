const jwt = require("jsonwebtoken");
const config = require("../config");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw new Error("No access token header");
    }

    const arr = token.split(" ");

    if (arr[0] !== "Bearer") {
      throw new Error("Different token type");
    }

    jwt.verify(arr[1], config.jwt.secret, (err, decoded) => {
      if (err) {
        throw new Error("Unauthorized");
      } else {
        if (!decoded.user) {
          throw new Error("User null");
        }
        req.user_id = decoded.user.id;
        next();
      }
    });
  } catch (error) {
    return res.status(401).json({
      error,
    });
  }
};

module.exports = authMiddleware;
