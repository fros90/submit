import express from "express";

import { body } from "express-validator";
import { getAllUser, getUser, signIn, signUp, updateUser } from "../controllers/user.controller.js";
const router = express.Router();

// http://localhost:3000/user/save
router.post("/signup",
body("username","username is required").notEmpty(),
body("email","email id is not correct").isEmail(),
body("email","email id is required").notEmpty(),
body("password","password is required").notEmpty(),
body("password","password must contain at least 4 letter").isLength({min: 4}),signUp);


router.post('/signin',signIn)

router.get('/getusers',getAllUser);
router.get('/getuser/:id',getUser);
router.post('/update',updateUser);

export default router;