import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
    name: {type: String, required: true},
    quantity: {type: Number, required: true},
    calories: {type: Number, required: true},
    protein: {type: Number, required: true},
    carbs: {type: Number, required: true},
    fats: {type: Number, required: true},
});

const DailyLogSchema = mongoose.Schema({
    date: {type: String, required: true},
    caloriesWanted: {type: Number, required: true},
    caloriesUsed: {type: Number, required: true},
    food : [foodSchema]
});


export default DailyLogSchema;


