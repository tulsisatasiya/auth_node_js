const Joi = require("joi");

const adduser = {
  body: Joi.object().keys({
    profile_pic: Joi.string(),
    firstName: Joi.string().required().trim(),
    lastName: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    role: Joi.string().required().trim(),
  }),
};
module.exports = {
    adduser,
};
