import React, {useState} from "react";

function NewFoodForm({onSubmit}){

    const [foodName, setFoodName] = useState("");
    const [foodCalories, setFoodCalories] = useState(1);

    const submitForm = (event) => {
        event.preventDefault();
        if(foodCalories > 0){
            onSubmit(foodName, foodCalories);
            setFoodName("");
            setFoodCalories(1);
        }
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <label>Food:</label>
                <input type="text" value={foodName} onChange={(e) => setFoodName(e.target.value)}></input>
                <label>Calories:</label>
                <input type="number" min="1" value={Number(foodCalories)} onChange={(e) => setFoodCalories(Number(e.target.value))}></input>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default NewFoodForm;