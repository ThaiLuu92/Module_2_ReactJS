import React from 'react';
import Navbars from './Coponents/Navbar/Navbars';
import {Routes, Route} from'react-router';
import { routes } from "./routes"





function App() {
  return(
    <>
    <Navbars />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
    
  )
}

export default App;
