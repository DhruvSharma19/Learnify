import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import {
  getCourseAnalytics,
  getOrdersAnalytics,
  getUsersAnalytics,
} from "../controllers/analytics.controller";
const analyticsRouter = express.Router();

analyticsRouter.get(
  "get-users-analytics",
  isAuthenticated,
  authorizeRole("admin"),
  getUsersAnalytics
);
analyticsRouter.get(
  "get-course-analytics",
  isAuthenticated,
  authorizeRole("admin"),
  getCourseAnalytics
);
analyticsRouter.get(
  "get-order-analytics",
  isAuthenticated,
  authorizeRole("admin"),
  getOrdersAnalytics
);

export default analyticsRouter;
