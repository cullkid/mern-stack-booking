import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controller/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("you are authenticated");
// });

// router.get("/checkUserAuth/:id", verifyUser, (req, res, next) => {
//   res.send("you are authenticated and delete");
// });

// router.get("/checkadmin/:id", verifyIsAdmin, (req, res, next) => {
//   res.send("Admin you are authenticated and delete");
// });

//GET ALL
router.get("/", verifyAdmin, getAllUser);

//get
router.get("/:id", verifyUser, getSingleUser);

//UPDATE
router.put("/:id", verifyUser, updateUser);

//delete
router.delete("/:id", verifyUser, deleteUser);

// router.get("/", getHotels);
// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
// router.get("/room/:id", getHotelRooms);

export default router;
