const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resumeSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  heading: {
    firstName: String,
    lastName: String,
    city: String,
    province: String,
    postalCode: String,
    phone: String,
    email: String,
  },
  workHistory: [
    {
      jobTitle: String,
      company: String,
      location: String,
      startDate: Date,
      endDate: Date,
      jobDescription: String,
    },
  ],
  education: [
    {
      schoolName: String,
      schoolLocation: String,
      degree: String,
      fieldOfStudy: String,
      graduationDate: Date,
    },
  ],
  skils: [String],
  summary: String,
});

module.exports = mongoose.model("Resume", resumeSchema);
