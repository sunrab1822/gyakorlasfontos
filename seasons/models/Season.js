const mongoose = require("mongoose");

const SeasonSchema = new mongoose.Schema({
  _id: {
    type: Number
  },
  number_of_episodes: {
    type: Number
  },
  release_date: {
    type: Date
  }
});

module.exports = mongoose.model(
  "SeasonModel",
  SeasonSchema,
  "seasons"
);
