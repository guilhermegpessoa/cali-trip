import React, { useState } from 'react';
import Calendar from 'react-calendar';
import activities from './components/constants/constants';

import 'react-calendar/dist/Calendar.css';
import ToDoList from './components/ToDoList';

function App() {
  const [value, onChange] = useState(new Date());
  const startDate = new Date(2022, 9, 1);

  function  onClickMonth() {
    return;
  }

  return (
    <div>
      <Calendar onChange={onChange} minDetail={"month"} onClickMonth={onClickMonth} value={value} activeStartDate={startDate}/>
      <ToDoList selectedDay={value} activities={activities} />
    </div>
  );
}

export default App;
