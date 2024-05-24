const express = require("express");
const EpisodeModel = require("../models/Episode");
const SeasonModel = require("../models/Season");

const router = express.Router();

router.post("/", async (req, res) => {
  const data = new EpisodeModel(req.body);
  try {
    const dataToSave = await data.save();
    res.status(201).json({ _id: dataToSave._id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/episodes/:season", async (req, res) => {
  try {
    const season = await SeasonModel.find({ _id: req.params.season });
    const data = await EpisodeModel.find({ season: season[0]._id}).populate("season", "-_id");

    if (data.length !== 0) {
      res.json(data);
    } else {
      res
        .status(404)
        .json({ message: "Nem található ilyen epizode" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/:title", async (req, res) => {
  try {
    const epizode = await EpisodeModel.findOne({title: req.params.title})
    const id = epizode._id;
    const data = await EpisodeModel.findByIdAndDelete(id);
    res.send(`Document with the id: ${data._id} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
