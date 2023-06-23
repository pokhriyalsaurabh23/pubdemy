import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/user.model";

export class AuthController {
  async login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user || !user.password) {
      return { status: false, message: "User does not exist" };
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return { status: false, message: "User is unauthorized" };
    }
    const payload = { name: user.name, lastLogin: "Monday 25th", email: user.email };
    const token = jwt.sign(payload, process.env.SECRET_KEY || "OtherSecretKey", { expiresIn: "2 Days" });
    return { token, status: true, user };
  }

  async signup(newUser: any) {
    const passwordHash = await bcrypt.hash(newUser.password, 10);
    const newData = { ...newUser, password: passwordHash };
    const newUserToBeInserted = new User({ ...newData });
    const data = await newUserToBeInserted.save();
    return { user: data, status: true };
  }
}
