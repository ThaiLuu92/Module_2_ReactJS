import React from 'react';
import logo from './logo.svg';
import './App.css';
import Shop from './Component/Shop/Shop';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function App() {
  return (
    <div>
      <Shop />
    </div>
  )
}

export default App;
