// here we make the schema for mongoose connection and export it
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the workout",
  },
  time: {
    type: Number,
    required: "Enter an a time value",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// - View multiple the combined weight of multiple exercises on the `stats` page.

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
