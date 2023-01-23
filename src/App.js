import React from 'react';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter , Routes, Route } from "react-router-dom"
import EcomApp from './Ecommerce App/EcomApp';
import Nav from './Ecommerce App/Nav';
import Home from './Ecommerce App/Home';


const App = () => {

  return (
     <>
     <BrowserRouter>
        <Routes>

          <Route path="/" element={ <EcomApp />} />
          <Route path="/home" element={
               <>
                <Nav/>
                <Home/>
               </>
             }/>

        </Routes>
      </BrowserRouter>
     </>
  )
}

export default App;
