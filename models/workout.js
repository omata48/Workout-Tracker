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
  var time = 0
  this.exercises.forEach(exercise => {
    time += exercise.duration
  });
  return time;
});

workoutSchema.set("toObject", { virtuals: true });
workoutSchema.set("toJSON", { virtuals: true });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
