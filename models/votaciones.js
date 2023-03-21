const { Schema, model } = require('mongoose');

module.exports = model("Votaciones", new Schema({
  ID: String,
  Content: Array
}));