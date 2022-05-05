// For friends collection from database
// 1.Create Schema
// 2.Create and export model
const mongoose = require("mongoose");
const { Schema } = mongoose;

const FriendSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  description: { type: String, required: false },
});

const FriendModel = mongoose.model("friends", FriendSchema);

module.exports = FriendModel;
