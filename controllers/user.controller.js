const { verifyToken, createToken } = require("../middlewares/auth");
const { userService } = require("../services");
const { send_Mail } = require("../services/email.service");



const addUser = async (req, res) => {
  try {
    const body = req.body;
    const file = req.file;

      body.profile_pic = file.path;
    console.log(body);

    // const userExist = await userService.getuserByemail(body.email);

    // if (userExist) {
    //   throw new Error("user already exist");
    // }

    // math.random function for sending code using nodemailer

    const user = await userService.addUser(body);

    if (user) {
      // const email = await send_Mail(user.email,code,"Your code for login");
      const email = await send_Mail(user.email);
      console.log("mail forwered ", email.envelope);
    }
    if (!user) {
      throw new Error("something went wrong");
    }

    res.status(201).json({
      message: "user Created success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//LOG-IN
const loginUser = async (req, res) => {
  const body = req.body;
  const email = req.body.email;
  const password = req.body.password;
  // const password = code;

  const findUser = await userService.findUser(email);

  console.log(findUser);
  // console.log(code,"password code");
  // console.log(body.password,"entered password");

  if (!findUser) {
    res.status(500).json({
      message: "user not found",
    });
  } else {
    if (password === findUser.password) {
      // necessary data only
      let data = {
        _id: findUser._id,
        email: findUser.email,
        role: findUser.role,
      };

      const token = createToken(data);
      res.cookie("login_token", token);
      res.status(200).json({
        message: "login success",
        // data: findUser,
      });
    } else {
      res.status(500).json({
        message: "invalid password",
      });
    }
  }
};

//GET
// const getUser = async (req, res) => {
//   const token = req.cookies["login_token"];
//   if (!token) {
//     res.status(500).json({
//       mesasge: "you are not login",
//     });
//   }
//   const user = await verifyToken(login_token);

//   console.log(user);

//   res.status(200).json({
//     message: "profile get success",
//     data: user,
//   });
// };

// const getProfile = (req, res) => {
//   const user = req.user;
//   res.status(200).json({ message: "profile get success", user });
// };
const getProfile = (req, res) => {
  const user = req.user;
  res.status(200).json({ message: "profile get success", user });
};

const getUser = (req, res) => {
  res.status(200).json({ message: "user get success" });
};

module.exports = { addUser, loginUser, getUser,getProfile };
