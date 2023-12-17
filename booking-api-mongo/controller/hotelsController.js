import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

//create
export const createHotels = async (req, res, next) => {
  //   //handle error
  //   const failed = true;
  //   if (failed)
  //     return next(createError("404", "Request Not Found, Something Went Wrong!"));

  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

//update
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true } //to return the new updated value immediately
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

//delete
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (err) {
    next(err);
  }
};

//get single hotel
export const getSingleHotel = async (req, res, next) => {
  try {
    const findSingleHotel = await Hotel.findById(req.params.id);
    res.status(200).json(findSingleHotel);
  } catch (err) {
    next(err);
  }
};

//get all hotels
export const getAllHotels = async (req, res, next) => {
  try {
    const findAllHotel = await Hotel.find();
    res.status(200).json(findAllHotel);
  } catch (err) {
    next(err);
  }
};
