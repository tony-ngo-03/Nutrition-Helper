import React from "react";

function Item ({index, name, calories, handleDelete}){

    

    return (
        <li key={index}>{name} - {calories} <button onClick={() => handleDelete({index})}>Remove</button></li>
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
                    {foodList.map( (element, index) => <Item name={element.name} calories={element.calories} key={index} index={index} handleDelete={handleDelete}/> )}
                </ul>
            )}
        </div>
    );
}


export default ItemList;