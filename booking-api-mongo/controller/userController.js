import User from "../models/User.js";

//update
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true } //to return the new updated value immediately
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

//delete
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (err) {
    next(err);
  }
};

//get single hotel
export const getSingleUser = async (req, res, next) => {
  try {
    const findSingleUser = await User.findById(req.params.id);
    res.status(200).json(findSingleUser);
  } catch (err) {
    next(err);
  }
};

//get all hotels
export const getAllUser = async (req, res, next) => {
  try {
    const findAllUser = await User.find();
    res.status(200).json(findAllUser);
  } catch (err) {
    next(err);
  }
};
