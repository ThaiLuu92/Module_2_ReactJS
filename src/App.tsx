import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Component/Toggle';



class App extends Component {
 handleChange = () => {

    
  }
  render() {
    return (
      <div className="App">
        <h1>Session-11</h1>
        {<Toggle handleChangeBlue={handleChange} backgroundColor={""} />}
      </div>
    );
  }
}

export default App;
