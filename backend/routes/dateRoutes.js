import express from "express";
import DailyLog from "../models/DailyLogModel.js";

const router = express.Router();

// GET ALL DATES
router.get("/get-all", async (_req, res) => {
    try{
        const response = await DailyLog.find();
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
        const response = await DailyLog.findById(id);
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
        const response = await DailyLog.find({date: date});
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

// POST NEW DAILY LOG 
router.post("/post-date", async (req, res) => {
    try{
        const {date, caloriesWanted, food} = req.body; 
        const caloriesUsed = food.reduce((acc, curr) => acc + (curr.calories * curr.quantity), 0);
        let newDailyLog = new DailyLog({date: date, caloriesWanted: caloriesWanted, caloriesUsed: caloriesUsed, food: food});
        await newDailyLog.save();
        res.status(200).json("Added new Log");
    }
    catch(error){
        res.status(400).json({message: `${error}`});
    }
})

// UPDATE DAILY LOG
router.put("/update-date", async (req, res) => {
    try{
        const {date, caloriesWanted, food} = req.body;
        const caloriesUsed = food.reduce((acc, curr) => acc + (curr.calories * curr.quantity), 0);
        const foundLog = await DailyLog.findOneAndUpdate({date: date}, {caloriesWanted: caloriesWanted, caloriesUsed: caloriesUsed, food: food});
        if (!foundLog){
            res.status(404).json(`Cannot find log of date ${date}`)
            return;
        }
        res.status(200).json("Updated Log");
    }
    catch(error){
        res.status(400).json({message: `${error}`});
    }
})

router.delete("/delete-date/:date", async (req, res) => {
    try{
        const {date} = req.params;
        const foundLog = await DailyLog.findOneAndDelete({date: date});
        if (!foundLog){
            res.status(404).json(`Cannot find log of date ${date}`);
            return;
        }
        res.status(200).json("Deleted log");
    }
    catch(error){
        res.status(400).json({message: `${error}`});
    }
})



export default router;