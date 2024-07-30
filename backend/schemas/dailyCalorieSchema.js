import mongoose from "mongoose";

const dailyCalorieSchema = mongoose.Schema({
    calories: {type: Number, required: true}
});

export default dailyCalorieSchema;