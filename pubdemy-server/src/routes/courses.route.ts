import express, { Request, Response, Router } from "express";
import { isAuthenticated } from "../middleware/auth.middleware";
import { CourseController } from "../controller/course.controller";

const router: Router = express.Router();

router.get("/courses", isAuthenticated, CourseController.getAllCourses);


router.get(
  "/courses/:id",
  isAuthenticated,
  CourseController.getCourseById
);

export default router;
