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

//get hotels by city
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(","); //split function used coma to split or demacate all cities when quering, e.g 'uk, london, lisbon'
  try {
    const list = await Promise.all(
      //promise.all used because we are returning many cities
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

//get hotels by type
export const countPropertyByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};
