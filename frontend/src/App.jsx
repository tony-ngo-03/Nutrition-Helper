import { useState, useEffect } from 'react'
import './App.css'
import ItemList from './ItemList.jsx';
import axios from 'axios';

function App() {

  const [foodList, setFoodList] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const getAllItems = async () => {
    try{
      const response = await axios.get("http://localhost:5000/food/get-all");
      setFoodList(response.data);
    }
    catch(error){
      console.error("Was not able to load items");
    }
  }

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div>
      <h1>Welcome!</h1>
      <p>{currentDate.toLocaleDateString()}</p>
      <ItemList foodList={foodList}/>
    </div>
  )
}

export default App
