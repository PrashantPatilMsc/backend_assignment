const Movies = require("../models/moviemodel");

const createMovie = async (req, res) => {
  try {
    const { name, img, summary } = req.body;

    if (!(name && img && summary)) {
      return res
        .status(400)
        .json({ status: false, message: "All fields are required" });
    }

    //console.log(name, image, summary);

    const data = await Movies.create({
      name,
      img,
      summary,
    });

    if (data) {
      return res
        .status(200)
        .json({ status: true, message: "Movie added Successfully" });
    } else {
      return res
        .status(200)
        .json({ status: true, message: "Failed to create" });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};
const getAllMovies = async (req, res) => {
  try {
    const data = await Movies.find({});

    return res.status(200).json({ status: true, data });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};
const getmovieById = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res
        .status(400)
        .json({ status: false, message: "send id in params" });
    }

    //console.log(id);
    const data = await Movies.findById({ _id: id });
    return res.status(200).json({ status: true, data });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

//UPDATE MOVIES
const updateMovieById = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res
        .status(400)
        .json({ status: false, message: "send id in params" });
    }

    const updateData = req.body;

    const data = await Movies.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      { new: true }
    );

    return res.status(200).json({ status: true, data: data });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

//DELETE MOVIES
const deleteMovie = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res
        .status(400)
        .json({ status: false, message: "send id in params" });
    }

    const data = await Movies.findOneAndDelete({ _id: id });

    if (data) {
      return res
        .status(200)
        .json({ status: true, message: "Deleted sucessfully" });
    } else {
      return res.status(404).json({ status: true, message: "id is incorrect" });
    }
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};
module.exports = {
  createMovie,
  getAllMovies,
  getmovieById,
  updateMovieById,
  deleteMovie,
};
