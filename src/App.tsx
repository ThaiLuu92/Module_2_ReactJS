import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch()
  // const conter = useSelector(state => state) as number
  const listTodos = useSelector(state => state) as string[]
  const [value, setValue] = React.useState("")
  return (
    <div className="App">
      {/* <h1>Counter : {conter} </h1>
      <button onClick={()=> dispatch({type:"UP"})}>UP</button>
      <button onClick={() => dispatch({ type: "DOWN" })}>DOWN</button>
      <button onClick={() => dispatch({ type: "X10" })}>X 10</button> */}
      <input type="text" placeholder='Nhập task' value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={()=> dispatch({type: "ADD_TODO", playload: value})}>ADD</button>
      <ul>
        {listTodos.map((item, index) => (
          <li key={index}>{item} <button  onClick={() => dispatch({ type: "DELETE_TODO", playload: value, index } )}>Delele</button>
            <button onClick={() => dispatch({ type: "UPDATE_TODO", playload: value, index })}>Edit</button> </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
