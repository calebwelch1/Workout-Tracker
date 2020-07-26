const router = require("express").Router();
const Workout = require("../models/Workout.js");
const { builtinModules } = require("module");
// route to api and mongoose db
//write mongoose queries

// - Add new exercises to a new workout plan.

router.post("/api/workouts", ({ body }, res) => {
  //make new workout
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
//Add exercises to a previous workout plan.
router.put("/api/workouts/?", ({ body }, res) => {
  // update previous workout
  // should sort by most reecent and update with what was sent.
  Workout.findOneAndUpdate({}, { body }, { sort: { created_at: -1 } }).catch(
    (err) => {
      res.status(400).json(err);
    }
  );
});
// - View multiple the combined weight of multiple exercises on the `stats` page.

router.get("/api/workouts/range", (req, res) => {
  //send weight stats
  // idk how to do this
  Workout.find({});
});
module.exports = router;
