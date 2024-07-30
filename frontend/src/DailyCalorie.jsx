import React, {useState} from "react";

function DailyCalorie({caloriesConsumed}){
    const [totalCalories, setTotalCalories] = useState(0);
    const caloriesLeft = totalCalories - caloriesConsumed;
    return (
        <>
            <form>
                <label>Daily Calories Wanted:</label>
                <input type="Number" min="1" onChange={(e) => setTotalCalories(Number(e.target.value))}></input>
                <label>Total Left: {caloriesLeft}</label>
            </form>
        </>
    );
}

export default DailyCalorie;