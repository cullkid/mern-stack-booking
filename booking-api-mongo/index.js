import express from "express"; //make sure to include "type": "module" in package.json
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    // await mongoose.connect(process.env.MONGO);
    await mongoose.connect(
      "mongodb+srv://eze:eze@cluster0.fvzegqo.mongodb.net/Booking?retryWrites=true&w=majority"
    );
    console.log("connected to mongodb.");
  } catch (error) {
    throw error;
  }
};

//if mongodb not able to connect after try and catch
mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});

//if mongodb is able to connect after try and catch
mongoose.connection.on("connected", () => {
  console.log("mongodb disconnected");
});

// middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
// app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
// app.use("/api/rooms", roomsRoute);

// next middleware to run when checked & run all the routes, used to handle error response
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("connected to backend.");
});
