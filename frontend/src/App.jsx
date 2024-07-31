import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import DateSelector from './DateSelector.jsx';
import Day from './Day.jsx';

function App() {

  const [currentDate, setCurrentDate] = useState(new Date());

  const updateDate = (newDate) => {
    setCurrentDate(newDate);
  }

  return (
    <div>
      <DateSelector currentDate={currentDate} handleUpdate={updateDate} />
      <Day currentDate={currentDate.toISOString().split('T')[0]}/>
    </div>
  )
}

export default App
