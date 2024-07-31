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

    const handleNewFoodSubmit = async (foodName, foodCalories, foodQuantity) => {
        try{
            const newFoodList = [...foodItemList, {name: foodName, quantity: foodQuantity, calories: foodCalories}];
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

    return (
        <>
        <NewFoodForm onSubmit={handleNewFoodSubmit}/>
        <DailyCalorie caloriesConsumed={caloriesUsed}/>
        <ItemList foodList={foodItemList} />
        
        </>
    );
}

export default Day;