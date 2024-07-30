import { useState, useEffect } from 'react'
import './App.css'
import ItemList from './ItemList.jsx';
import DateSelector from './DateSelector.jsx';
import DailyCalorie from './DailyCalorie.jsx';
import NewFoodForm from './NewFoodForm.jsx';
import axios from 'axios';

function App() {

  const [foodList, setFoodList] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dailyCalorie, setDailyCalorie] = useState(0);
  const getAllItems = async () => {
    try{
      const response = await axios.get(`http://localhost:5000/food/get-date/${currentDate.toISOString().split('T')[0]}`);
      setFoodList(response.data);
      setDailyCalorie(foodList.reduce((acc, curr) => acc + curr.calories, 0));
    }
    catch(error){
      console.error("Was not able to load items");
    }
  }

  const addNewFoodItem = async (name, calories) => {
    try{
      const response = await axios.put("http://localhost:5000/food/add-food/", {"name": name, "quantity": 1, "calories": calories, "date": currentDate.toISOString().split('T')[0]});
      getAllItems();
    }
    catch(error){
      console.error("Was not able to add item");
    }
  }

  useEffect(() => {
    getAllItems();
  }, [currentDate]);


  const updateDate = (newDate) => {
    setCurrentDate(new Date(newDate));
  }

  return (
    <div>
      <h1>Welcome!</h1>
      <DateSelector currentDate={currentDate} handleUpdate={updateDate}/>
      <DailyCalorie caloriesConsumed={dailyCalorie} />
      <NewFoodForm onSubmit={addNewFoodItem}/>
      <ItemList foodList={foodList}/>
    </div>
  )
}

export default App
