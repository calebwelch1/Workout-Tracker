// here we make the schema for mongoose connection and export it
const mongoose = require("mongoose");
const { isNumber } = require("util");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exerciseType: {
    type: String,
    trim: true,
  },
  exerciseName: {
    type: String,
    trim: true,
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  duration: {
    type: Number,
    trim: true,
  },
});
// - View multiple the combined weight of multiple exercises on the `stats` page.

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
