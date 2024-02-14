const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  profile_pic: {
    type: String,
  
  },
  firstName: {
    type: String,
    
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enums: ["user", "admin"],
    default: "user",
  },
});

const user = mongoose.model("userSchema", userSchema);

module.exports = user;
