const Joi = require("joi");

const addPodervalid = {
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    description: Joi.string().trim(),
    price: Joi.number().required().min(1),
    category: Joi.string().required().trim(),
   
  }),
};

module.exports = {
  addPodervalid
};
