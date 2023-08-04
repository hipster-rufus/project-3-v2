const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const ratingSchema = new Schema({
  value: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Rating = model("Rating", ratingSchema);

module.exports = Rating;
