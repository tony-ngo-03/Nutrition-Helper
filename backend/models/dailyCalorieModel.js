import mongoose from "mongoose";
import dailyCalorieSchema from "../schemas/dailyCalorieSchema.js";

const dailyCalorie = mongoose.model("dailyCalorie", dailyCalorieSchema);

export default dailyCalorie;