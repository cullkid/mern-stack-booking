import express from "express";
import { userLogin, userRegister } from "../controller/authController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);

export default router;
