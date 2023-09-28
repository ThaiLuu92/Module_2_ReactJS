import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter';
import List from './List/List';
import ColorChanger from './ColorChanger/ColorChanger';
import Toggle from './Toggle/Toggle';
import PercentageCalculator from './PercentageCalculator/PercentageCalculator';
import ProductRating from './ProductRating/ProductRating';




function App() {
   const arrList = ["Homework", "Go to sleep","Ngủ","Ăn"];
  return (
    <div>
      <h1>Session-11</h1>
      <div>
        <Counter />
      </div>
      <div>
        <List items={arrList} />
      </div>
      {/* <div><ColorChanger/></div> */}
      <div>
        <Toggle />
      </div>
      <div>
        <PercentageCalculator number={20} percentage={30} />
      </div>
      <div>
        <ProductRating rating={5} />
      </div>
    </div>
  );
}

export default App;
