const router = require("express").Router();
const Workout = require("../models/workout"); 

router.get("/api/workouts",(req, res) => {
    Workout.find({})
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id",(req,res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err,data) => {
            if (err) return res.status(500).send(err);
            return res.send(data);
        }
    );
});

router.post("/api/workouts",({body},res) => {
    Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range",(req, res) => {
    Workout.find({})
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

module.exports = router;