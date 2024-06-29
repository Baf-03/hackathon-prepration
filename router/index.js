import express from "express";
import { loginController,  otpProcessApi,  otpVerify, signupController, verify } from "../Controllers/authController.js";
import upload from "../utils/multer.js";
import { UploadImage } from "../Controllers/postController.js";
import { verifyTokenMiddleware } from "../middleware/index.js";
const router = express.Router();

router.post("/api/auth/register",signupController);
router.post("/api/auth/login",loginController)
router.post("/api/verifyotp",otpVerify)


router.get("/api/auth/verify",verifyTokenMiddleware,verify)

router.post("/api/auth/resend-otp",otpProcessApi)
//multiple or single image upload api
router.post("/api/uploadimage",upload.any("image"),UploadImage)


export default router;