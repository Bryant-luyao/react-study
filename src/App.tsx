import { Routes, Route, Link } from 'react-router'
import dayjs from 'dayjs';
import Calendar from './components/Calendar';
import './App.scss';
import IconDemo from './views/IconDemo';
import SpaceDemo from './views/SpaceDemo';

function App() {
  return (
    <div className="App">
      <ul className="menus">
        <li>
          <Link to="/">Calendar</Link>
        </li>
        <li>
          <Link to="/Icon">Icon</Link>
        </li>
        <li>
          <Link to="/Space">Space</Link>
        </li>
      </ul>
      <div className="layout">
        <Routes>
          <Route index element={<Calendar locale="en-US" defaultValue={dayjs('2025-04-08')}></Calendar>}></Route>
          <Route path='/Icon' element={<IconDemo />}></Route>
          <Route path='/Space' element={<SpaceDemo />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
