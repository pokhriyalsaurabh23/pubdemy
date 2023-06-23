import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: Number,
  name: String,
  email: String,
  password: String,
});
export const User = mongoose.model("users", UserSchema);


