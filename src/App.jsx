import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Rtest1 from './Tests/Test 1/Rtest1';
import Rtest2 from './Tests/Test 2/Rtest2';
import Rtest3 from './Tests/Test 3/Rtest3';
import Rtest4 from './Tests/Test 4/Rtest4';
import './index.css';

const App = () => {
  return (
    <div className='App'>

<nav className='nav1'>
  <ul>
    <li style={{ listStyle: 'none' }}>
      <NavLink to="/bh" style={({ isActive }) => ({textDecoration: 'none', color: isActive ? 'dodgerblue' : 'black', })}>Test 1</NavLink>
    </li>
    <li style={{ listStyle: 'none' }}>
      <NavLink to="/t" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? 'dodgerblue' : 'black', })}>Test 2</NavLink>
    </li>
    <li style={{ listStyle: 'none' }}>
      <NavLink to="/tf3" style={({ isActive }) => ({textDecoration: 'none', color: isActive ? 'dodgerblue' : 'black', })}>Test 3</NavLink>
    </li>
    <li style={{ listStyle: 'none' }}>
      <NavLink to="/tgt4" style={({ isActive }) => ({textDecoration: 'none', color: isActive ? 'dodgerblue' : 'black', })}>Test 4</NavLink>
    </li>
  </ul>
</nav>

<hr />

      <Routes>
        <Route path="/bh" element={<Rtest1 />} />
        <Route path="/t" element={<Rtest2 />} />
        <Route path="/tf3" element={<Rtest3 />} />
        <Route path="/tgt4" element={<Rtest4 />} />
      </Routes>
      
    </div>
  );
};

export default App;