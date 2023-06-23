import { Course } from "../models/course.model";

export class CourseService {
  static async getCourses(search: string | undefined | any) {
    if (search) {
      return Course.find({
        $or: [{ title: { $regex: search, $options: "i" } }]
      });
    } else {
      return Course.find({});
    }
  }

  static async getCourseById(id: string) {
    return Course.findOne({ id });
  }
}
