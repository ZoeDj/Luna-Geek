import jwt from "jasonwebtoken";
const getToken = (user) => {
  return jwt.sign(user, config.JWT_SECRET, {
    expiresIn: "48h",
  });
};

export { getToken };
