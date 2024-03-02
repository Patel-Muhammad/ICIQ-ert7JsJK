import express from "express";
import controller from "../controller";
const router = express.Router();

// import controllers

router.route("/createUser").post(controller.UserController.CreateUser);

export default router;
