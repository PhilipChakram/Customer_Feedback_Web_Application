const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeintSchema = new Schema({
  email: String,
  responded: {type: Boolean, default: false}
});

module.exports = recipeintSchema;
