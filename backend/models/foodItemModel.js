import mongoose from "mongoose";
import foodItemSchema from "../schemas/foodItemSchema.js";

const foodItem = mongoose.model("foodItem", foodItemSchema);

export default foodItem;