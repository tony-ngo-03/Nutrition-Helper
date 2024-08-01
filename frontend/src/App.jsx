import { useState } from 'react'
import './App.css'
import DateSelector from './DateSelector.jsx';
import Day from './Day.jsx';

function App() {

  // stores the current date that the app is looking at 
  const [currentDate, setCurrentDate] = useState(new Date());

  const updateDate = (newDate) => {
    setCurrentDate(newDate);
  }

  return (
    <div>
      <DateSelector currentDate={currentDate} handleUpdate={updateDate} />
      {/* uses string version for convenience */}
      <Day currentDate={currentDate.toISOString().split('T')[0]}/> 
    </div>
  )
}

export default App
