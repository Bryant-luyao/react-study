import React from 'react';
import Calendar from './components/Calendar';
import './App.css';
import dayjs from 'dayjs';

function App() {
  return (
    <div className="App">
      <Calendar locale="en-US" defaultValue={dayjs('2025-04-08')}></Calendar>
    </div>
  );
}

export default App;
