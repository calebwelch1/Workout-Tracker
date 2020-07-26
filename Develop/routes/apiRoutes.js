const router = require("express").router();
const Workout = require("../models/Workout.js");
// route to api and mongoose db
//write mongoose queries

// - Add new exercises to a new workout plan.

router.post("/api/workouts", (req, res) => {
  Workout.create({
    //login}).then();
  });
});
//Add exercises to a previous workout plan.

// - View multiple the combined weight of multiple exercises on the `stats` page.
