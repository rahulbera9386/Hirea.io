import express from "express";
import isAuthenticated from './../middlewares/isAuthenticated.js';
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import singleUpload from './../middlewares/multer.js';


const route=express.Router();


route.post("/register",isAuthenticated,registerCompany);
route.get("/get",isAuthenticated,getCompany);
route.get("/get/:id",isAuthenticated,getCompanyById);
route.put("/update/:id",isAuthenticated,singleUpload,updateCompany);


export default route;