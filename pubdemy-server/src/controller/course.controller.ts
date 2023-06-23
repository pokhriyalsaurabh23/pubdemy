import { Request, Response } from "express";
import { CourseService } from "../services/courses.service";

export class CourseController {
  static async getAllCourses(req: Request, res: Response) {
    try {
      const { search } = req.query;
      const courses = await CourseService.getCourses(search);
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).send("Error while fetching courses");
    }
  }

  static async getCourseById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const course = await CourseService.getCourseById(id);
      res.status(200).json({ status: true, course });
    } catch (error) {
      res.status(500).send("Error while fetching this course");
    }
  }
}
