import express from "express";
import { loginController, signupController } from "../Controllers/authController.js";

const router = express.Router();

router.post("/api/auth/register",signupController);
router.post("/api/auth/login",loginController)




export default router;