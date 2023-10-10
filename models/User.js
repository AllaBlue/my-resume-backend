const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  firstName: {
    type: String,
    require: true,
  },
  secondName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  resume: {
    type: Schema.Types.ObjectId,
    ref: "Resume",
  },
});

module.exports = mongoose.model("User", userSchema);
