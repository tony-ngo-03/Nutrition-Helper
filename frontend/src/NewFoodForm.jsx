import React, {useState} from "react";

function NewFoodForm({onSubmit}){

    const [foodName, setFoodName] = useState("");
    const [foodCalories, setFoodCalories] = useState(1);
    const [foodProtein, setFoodProtein] = useState(0);
    const [foodCarbs, setFoodCarbs] = useState(0);
    const [foodFats, setFoodFats] = useState(0);
    
    const submitForm = (event) => {
        event.preventDefault();
        if(foodCalories > 0 && foodName.length > 0){
            onSubmit(foodName, foodCalories, 1, foodProtein, foodCarbs, foodFats);
            setFoodName("");
            setFoodCalories(1);
            setFoodProtein(0);
            setFoodCarbs(0);
            setFoodFats(0);
        }
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <label>Food:</label>
                <input type="text" value={foodName} onChange={(e) => setFoodName(e.target.value)}></input>
                <label>Calories:</label>
                <input type="number" min="1" value={Number(foodCalories)} onChange={(e) => setFoodCalories(Number(e.target.value))}></input>
                <label>Protein (g):</label>
                <input type="number" min="0" value={Number(foodProtein)} onChange={(e) => setFoodProtein(Number(e.target.value))}></input>
                <label>Carbs (g):</label>
                <input type="number" min="0" value={Number(foodCarbs)} onChange={(e) => setFoodCarbs(Number(e.target.value))}></input>
                <label>Fats (g):</label>
                <input type="number" min="0" value={Number(foodFats)} onChange={(e) => setFoodFats(Number(e.target.value))}></input>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default NewFoodForm;