import express from "express";
import isAuthenticated from './../middlewares/isAuthenticated.js';
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";

const route=express.Router();


route.get("/apply/:id",isAuthenticated, applyJob);
route.get("/get",isAuthenticated, getAppliedJobs);
route.get("/:id/applicants",isAuthenticated, getApplicants);
route.post("/status/:id/update",isAuthenticated, updateStatus);
 

export default route;