// here we make the schema for mongoose connection and export it
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Add exercises to a previous workout plan.

// - Add new exercises to a new workout plan.

// - View multiple the combined weight of multiple exercises on the `stats` page.

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

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
