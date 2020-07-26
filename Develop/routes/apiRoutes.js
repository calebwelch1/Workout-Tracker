const router = require("express").router();
const Workout = require("../models/Workoout");

router.post('/api/workout', (req,res)=>{
    Workout.create({//login}).then();
})