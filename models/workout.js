const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: {
    type: Array
  }
});

workoutSchema.virtual("totalDuration").get(function() {
  var duration = 0
  exercises.forEach(exercise => {
    duration += exercise.duration
  });
  return duration;
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
