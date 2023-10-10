import React from 'react';
import Navbars from './Coponents/Navbar/Navbars';
import { routes } from "./routes"
import { Route, Routes } from 'react-router-dom';





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
