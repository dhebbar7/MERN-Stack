const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create schema

const itemSchema = new Schema({
  name: {},
  date: {}
});

module.exports = Item = mongoose.model("item", itemSchema);
