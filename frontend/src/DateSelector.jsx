import React from "react";

function DateSelector({currentDate, handleUpdate}){
    
    // changes date based on offset of days
    const changeDate = (dayOffset) => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + dayOffset);
        handleUpdate(newDate);
    }

    return (
        <>
        <span>
            <button onClick={() => {changeDate(-1)}}>Previous Day</button>
        </span>
        <span>{currentDate.toLocaleDateString()}</span>
        <span>
            <button onClick={() => {changeDate(1)}}>Next Day</button>
        </span>
        </>
    );
}


export default DateSelector;