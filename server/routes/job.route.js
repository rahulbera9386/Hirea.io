import express from "express";
import isAuthenticated from './../middlewares/isAuthenticated.js';
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";
import isRecruiter from './../middlewares/isRecruiter.js';


const route=express.Router();

route.post("/post",isAuthenticated,isRecruiter,postJob);
route.get("/get",isAuthenticated,getAllJobs);
route.get("/get/:id",isAuthenticated,getJobById);
route.get("/adminjobs",isAuthenticated,isRecruiter,getAdminJobs);
export default route;