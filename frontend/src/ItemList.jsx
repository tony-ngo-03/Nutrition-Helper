import React from "react";

function Item ({key, name, calories}){
    return (
        <li key={key}>{name} - {calories}</li>
    );
}

function ItemList({foodList}){
    return (
        <div>
            {foodList.length === 0 ? (<p>None Found...</p>) : (
                <ul>
                    {foodList.map( (element, index) => <Item name={element.name} calories={element.calories} key={index}/> )}
                </ul>
            )}
        </div>
    );
}


export default ItemList;