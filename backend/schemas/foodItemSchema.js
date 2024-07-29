import mongoose from "mongoose";

const foodItemSchema = mongoose.Schema({
    name: {type: String, required: true},
    quantity: {type: Number, required: true},
    calories: {type: Number, required: true},
    createdDate: {type: Date, required: true}
});

export default foodItemSchema;