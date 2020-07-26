const router = require("express").Router();
const Workout = require("../models/Workout.js");
const { builtinModules } = require("module");
// route to api and mongoose db
//write mongoose queries

// - Add new exercises to a new workout plan.

router.post("/api/workouts", (req, res) => {
  //make new workout
  Workout.create({
    //login}).then();
  });
});
//Add exercises to a previous workout plan.
router.put("/api/workouts/?", (req, res) => {
  // update previous workout
});
// - View multiple the combined weight of multiple exercises on the `stats` page.

router.get("/api/workouts/range", (req, res) => {
  //send weight stats
});
module.exports = router;
