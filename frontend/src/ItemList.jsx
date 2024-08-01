import React from "react";

function Item ({index, foodItem, handleDelete}){
    return (
        <li key={index}>{foodItem.name} - {foodItem.calories} cal(s) <button onClick={() => handleDelete({index})}>Remove</button>
            <ul>
                <li>P: {foodItem.protein}</li>
                <li>C: {foodItem.carbs}</li>
                <li>F: {foodItem.fats}</li>
            </ul>
        </li>
    );
}

function ItemList({foodList, deleteFromList}){

    const handleDelete = (index) => {
        deleteFromList(foodList[index.index]);
    }
    return (
        <div>
            {foodList.length === 0 ? (<p>None Found...</p>) : (
                <ul>
                    {foodList.map( (element, index) => <Item foodItem={element} key={index} index={index} handleDelete={handleDelete}/> )}
                </ul>
            )}
        </div>
    );
}


export default ItemList;