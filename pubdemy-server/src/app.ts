import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./routes/auth";
import courseRouter from "./routes/courses.route";

dotenv.config();
mongoose.connect(
  process.env.ONLINETRAININGDB_MONGO_CONNECTION_STRING || "",
  {},
);

mongoose.connection.on("open", () => {
  console.log(`Online Training DB connected !`);
});

const app: Express = express();
const port = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/", courseRouter);

app.listen(port, () => {
  console.log(`Server running @ port ${port} !`);
});
