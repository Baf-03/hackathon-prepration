import express from "express";
import { loginController, signupController, verify } from "../Controllers/authController.js";
import upload from "../utils/multer.js";
import { UploadImage } from "../Controllers/postController.js";
import { verifyTokenMiddleware } from "../middleware/index.js";
const router = express.Router();

router.post("/api/auth/register",signupController);
router.post("/api/auth/login",loginController)

router.get("/api/auth/verify",verifyTokenMiddleware,verify)

//multiple or single image upload api
router.post("/api/uploadimage",upload.any("image"),UploadImage)

export default router;