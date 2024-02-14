const express = require("express");
const validate = require("../middlewares/validate");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const { restrict, authanticate } = require("../middlewares/auth");
const { upload } = require("../middlewares/multer");


const route = express.Router();
route.get(
  "/getuser",
  authanticate,
  restrict(["user"]),
  userController.getUser
);
route.get(
  upload.single(),
  authanticate,
  restrict(["user"]),
  userController.getProfile
);
route.post(
  "/register",upload.single("profile_pic"),
  validate(userValidation.adduser),
  userController.addUser
);
route.post("/login", userController.loginUser);

module.exports = route;