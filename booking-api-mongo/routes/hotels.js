import express from "express";
import {
  countByCity,
  countPropertyByType,
  createHotels,
  deleteHotel,
  getAllHotels,
  getSingleHotel,
  updateHotel,
} from "../controller/hotelsController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotels);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//delete
router.delete("/:id", verifyAdmin, deleteHotel);

//get
router.get("/find/:id", verifyUser, getSingleHotel);

//GET ALL
router.get("/", verifyUser, getAllHotels);

//get hotel by city
router.get("/countByCity", verifyUser, countByCity);

//get property by type
router.get("/countPropertyByType", verifyUser, countPropertyByType);

//get hotel room
// router.get("/room/:id", getHotelRooms);

export default router;
