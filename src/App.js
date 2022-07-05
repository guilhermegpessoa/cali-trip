import React, { useState } from 'react';
import Calendar from 'react-calendar';
import activities from './components/constants/activities';
// import expenses from './components/constants/expenses';

import 'react-calendar/dist/Calendar.css';
import ToDoList from './components/todo/ToDoList';
// import ExpensesList from './components/expenses/ExpensesList';

function App() {
  const [value, onChange] = useState(new Date());
  const startDate = new Date(2022, 9, 1);

  function onClickMonth() {
    return;
  }

  return (
    <div>
      <Calendar
        onChange={onChange}
        minDetail={'month'}
        onClickMonth={onClickMonth}
        value={value}
        activeStartDate={startDate}
      />
      <ToDoList selectedDay={value} activities={activities} />
      {/* <ExpensesList expenses={expenses} /> */}
    </div>
  );
}

export default App;