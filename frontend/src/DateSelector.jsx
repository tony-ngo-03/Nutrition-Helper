import React from "react";

function DateSelector({currentDate, handleUpdate}){
    
    const changeDate = (offset) => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + offset);
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