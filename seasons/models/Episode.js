const mongoose = require("mongoose");


const EpisodeSchema = new mongoose.Schema({
  _id: {
    type: Number
  },
  season: {
    type: Number,
    ref: "SeasonModel"
  },
  episode_in_season: {
    type: Number
  },
  title: {
    type: String
  },
  directed_by: {
    type: String
  },
  written_by: {
    type: String
  },
  air_date: {
    type: Date
  },
  us_viewers_in_millions: {
    type: Number
  }
});

module.exports = mongoose.model("EpisodeModel", EpisodeSchema, "episodes"); // ezzel a névvel lesz létrehozva a kollekció.
