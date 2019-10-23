const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required,sry!"],
    unique: [true, "Name already exists in the databse!"]
  },
  description: {
    type: String,
    required: [true, "Description field is required, sry!"],
    maxlength: [50, "Description should be max 50 characters long!"]
  },
  imageUrl: {
    type: String,
    required: [true, "Image field is requried, sry!"]
  },
  isPublic: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: String,
    required: [true, "Date must be provided"]
  },
  usersEnrolled: [{ type: mongoose.Types.ObjectId, ref: "users" }],
  creatorId: {
    type: mongoose.Types.ObjectId,
    ref: "users",
    required: true
  }
});

module.exports = mongoose.model("Course", courseSchema, "courses");
