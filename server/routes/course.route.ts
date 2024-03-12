import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import {
  addReplyToReview,
  addReview,
  delteCourse,
  editCourse,
  getAllCourses,
  getCourseByUser,
  getCourses,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controller";

const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  isAuthenticated,
  authorizeRole("admin"),
  uploadCourse
);
courseRouter.put(
  "/edit-course/:id",
  isAuthenticated,
  authorizeRole("admin"),
  editCourse
);
courseRouter.get("/get-course/:id", getSingleCourse);

courseRouter.get("/get-courses", getAllCourses);
courseRouter.get("/get-course-content/:id", isAuthenticated, getCourseByUser);
courseRouter.get("/add-review/:id", isAuthenticated, addReview);
courseRouter.get(
  "/add-reply",
  isAuthenticated,
  authorizeRole("admin"),
  addReplyToReview
);
courseRouter.get(
  "/get-courses",
  isAuthenticated,
  authorizeRole("admin"),
  getCourses
);
courseRouter.delete(
  "/delete-course/:id",
  isAuthenticated,
  authorizeRole("admin"),
  delteCourse
);

export default courseRouter;
