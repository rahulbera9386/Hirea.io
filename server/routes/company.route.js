import express from "express";
import isAuthenticated from './../middlewares/isAuthenticated.js';
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import singleUpload from './../middlewares/multer.js';
import isRecruiter from './../middlewares/isRecruiter.js';


const route=express.Router();


route.post("/register",isAuthenticated,isRecruiter,registerCompany);
route.get("/get",isAuthenticated,isRecruiter,getCompany);
route.get("/get/:id",isAuthenticated,isRecruiter,getCompanyById);
route.put("/update/:id",isAuthenticated,isRecruiter,singleUpload,updateCompany);


export default route;