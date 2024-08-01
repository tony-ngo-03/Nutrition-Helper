import React, {useState, useEffect} from "react";
import ItemList from './ItemList.jsx';
import DailyCalorie from './DailyCalorie.jsx';
import NewFoodForm from './NewFoodForm.jsx';
import axios from "axios";

function Day({currentDate}){

    const [caloriesWanted, setCaloriesWanted] = useState(0);
    const [caloriesUsed, setCaloriesUsed] = useState(0);

    const [foodItemList, setFoodItemList] = useState([]);

    const getDayInfo = async () => {
        try{
            let response = await axios.get(`http://localhost:5000/date/get-date/${currentDate}`);
            if (response.data.length === 0){ // empty!
                await axios.post("http://localhost:5000/date/add-date", {date: currentDate, caloriesWanted: 0, food: []});
            }
            response = await axios.get(`http://localhost:5000/date/get-date/${currentDate}`);
            setFoodItemList(response.data[0].food);
            setCaloriesWanted(response.data[0].caloriesWanted);
            setCaloriesUsed(response.data[0].caloriesUsed);
            
        }
        catch(error){
            console.error(`Error when retrieving items from ${currentDate}: ${error}`);
        }
    }

    useEffect(() => {
        getDayInfo();
    }, [currentDate]);

    const handleNewFoodSubmit = async (foodName, foodCalories, foodQuantity, foodProtein, foodCarbs, foodFats) => {
        try{
            const newFoodList = [...foodItemList, {name: foodName, quantity: foodQuantity, calories: foodCalories, protein: foodProtein, carbs: foodCarbs, fats: foodFats}];
            const response = await axios.put("http://localhost:5000/date/update-date", {date: currentDate, caloriesWanted: caloriesWanted, food: newFoodList});
            if (response){
                console.log("Successfully updated Date");
                getDayInfo();
            }
        }
        catch(error){
            console.error(`Error when updating ${currentDate}: ${error}`);
        }
    }
    
    const handleNewCalorieWanted = async (newCaloriesWanted) => {
        try{
            setCaloriesWanted(newCaloriesWanted);
            const response = await axios.put("http://localhost:5000/date/update-date", {date: currentDate, caloriesWanted: newCaloriesWanted, food: foodItemList});
            if (response){
                console.log("Successfully updated Date");
                getDayInfo();
            }
        }
        catch(error){
            console.error(`Error when updating ${currentDate}: ${error}`);
        }
    }

    const handleDeletion = async (foodItem) => {
        try{
            const newFoodItemList = foodItemList.filter(item => item !== foodItem);
            setFoodItemList(newFoodItemList);
            const response = await axios.put("http://localhost:5000/date/update-date", {date: currentDate, caloriesWanted: caloriesWanted, food: newFoodItemList});
            if (response){
                console.log("Sucessfully updated Date");
                getDayInfo();
            }
        }
        catch(error){
            console.error(`Error when deleting ${fooditem}: ${error}`);
        }
    }

    return (
        <>
        <NewFoodForm onSubmit={handleNewFoodSubmit}/>
        <DailyCalorie caloriesWanted ={caloriesWanted} caloriesConsumed={caloriesUsed} onCalorieChange={handleNewCalorieWanted}/>
        <ItemList foodList={foodItemList} deleteFromList={handleDeletion}/>
        </>
    );
}

export default Day;