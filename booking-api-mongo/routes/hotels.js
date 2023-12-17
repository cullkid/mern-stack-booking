import express from "express";
import {
  createHotels,
  deleteHotel,
  getAllHotels,
  getSingleHotel,
  updateHotel,
} from "../controller/hotelsController.js";

const router = express.Router();

//CREATE
router.post("/", createHotels);

//UPDATE
router.put("/:id", updateHotel);

//delete
router.delete("/:id", deleteHotel);

//get
router.get("/:id", getSingleHotel);

//GET ALL
router.get("/", getAllHotels);

// router.get("/", getHotels);
// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
// router.get("/room/:id", getHotelRooms);

export default router;
