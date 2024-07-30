import express from "express";
import foodItem from "../models/foodItemModel.js";

const router = express.Router();

// GET ALL
router.get("/get-all", async (_req, res) => {
    try{
        const response = await foodItem.find();
        res.status(200).json(response);
    }
    catch (error){
        res.status(400).json({message: `${error}`});
    }
});

// GET BY ID
router.get("/get-id/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const response = await foodItem.findById(id);
        if (!response){
            res.status(404).json({message: `${id} not found`});
            return;
        }
        res.status(200).json(response);
    }
    catch(error){
        res.status(400).json({message: `${error}`});
    }
})

// GET BY DATE
router.get("/get-date/:date", async (req, res) => {
    try{
        const {date} = req.params;
        const response = await foodItem.find({date: date});
        if (!response){
            res.status(404).json({message: "not found"});
            return;
        }
        res.status(200).json(response);
    }
    catch(error){
        res.status(400).json({message: `${error}`});
    }
})

router.put("/add-food/", async (req, res) => {
    try{
        const {name, quantity, calories, date} = req.body;
        const newItem = new foodItem({name: name, quantity: quantity, calories: calories, date: date});
        await newItem.save();
        res.status(200).json(newItem);
    }
    catch(error){
        res.status(400).json({message: `${error}`});
    }
})



export default router;