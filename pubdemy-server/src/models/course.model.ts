import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  id: Number,
  title: String,
  price: Number,
  discountedPrice: Number,
  rating: Number,
  studentsEnrolled: Number,
  likes: Number,
  trainerName: String,
  imageUrl: String,
  avatarUrl: String,
  introVideo: String,
  description: String,
});
export const Course = mongoose.model("courses", CourseSchema);


