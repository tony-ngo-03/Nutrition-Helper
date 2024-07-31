import React, {useState} from "react";

function DailyCalorie({caloriesWanted, caloriesConsumed, onCalorieChange}){
    const caloriesLeft = caloriesWanted - caloriesConsumed;

    const updateCalorieWanted = (e) => {
        onCalorieChange(Number(e.target.value));
    }


    return (
        <>
            <form>
                <label>Daily Calories Wanted:</label>
                <input type="Number" min="1" onChange={updateCalorieWanted} value={caloriesWanted}></input>
                <label>Total Left: {caloriesLeft}</label>
            </form>
        </>
    );
}

export default DailyCalorie;