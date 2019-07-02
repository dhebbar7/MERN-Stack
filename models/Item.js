const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create schema

const itemSchema = new Schema({
  name: {}
});

module.exports = Item = mongoose.model("item", itemSchema);
