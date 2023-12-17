import User from "../models/user.js";
import bcrypt from "bcryptjs"; //package to hash password in database
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

//register
export const userRegister = async (req, res, next) => {
  //to hash password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const newUser = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: hash,
  });

  try {
    await newUser.save();
    res.status(201).send("New User created Successful");
  } catch (err) {
    next(err);
  }
};

//login
export const userLogin = async (req, res, next) => {
  const user = await User.findOne({ userName: req.body.userName }); //get existing user
  if (!user) return next(createError(404, "User Not Found")); //check existing user

  const corectPassword = await bcrypt.compare(req.body.password, user.password); //compare bcrypt password in database and entering login password
  if (!corectPassword) return next(createError(404, "Incorrect password")); //check existing password

  //use jwt to determine the API request authorization
  const token = jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT
  );

  //destructure user to save only userName and password when login in the browser
  const { isAdmin, password, ...otherCredentials } = user._doc;

  try {
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(201)
      .json(otherCredentials);
  } catch (err) {
    next(err);
  }
};
