const jwt = require("jsonwebtoken");
const user = require("../models/user.model");
const secret = "thiskeyissecret";

const createToken = (data) => {
  const login_token = jwt.sign({ data }, secret);
  return login_token;
};

const verifyToken = (login_token) => {
  return jwt.verify(login_token, secret);
};

// const authanticate = (req, res, next) => {
//   const token = req.cookies.token;

//   console.log(token);

//   if (!token) {
//     res.status(400).json({ message: "you are not login" });
//   }

//   const user = jwt.verify(token, secret);

//   req.user = user;

//   next();
// };

const authanticate = (req, res, next) => {
  const token = req.cookies.login_token;  // Use "login_token" here

  console.log(token);

  if (!token) {
    res.status(400).json({ message: "you are not login" });
  }

  try {
    const user = jwt.verify(token, secret);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};





const restrict = ([...role]) => {
  return (req, res, next) => {
    const user = req.user;
    console.log(user, "res");
    if (role.includes(user.data.role)) {
      next();
    } else {
      res.status(400).json({ message: "you are unauthorised" });
    }
  };
};

module.exports = { createToken, verifyToken, authanticate, restrict };
