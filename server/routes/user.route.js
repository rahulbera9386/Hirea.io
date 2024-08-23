import express from "express";
import singleUpload from "./../middlewares/multer.js";
import { login, logout, signup, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from './../middlewares/isAuthenticated.js';

const route = express.Router();

route.post("/signup", singleUpload, signup);
route.post("/login",login);
route.get("/logout",logout);
route.post("/profile/update",isAuthenticated,singleUpload,updateProfile)

export default route;
