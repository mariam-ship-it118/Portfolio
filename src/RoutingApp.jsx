import React, { Component } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

const RoutingApp = () => {
    return ( 

        <BrowserRouter>
        <Routes>

       <Route path='/'  element={<Home />} />
       <Route path='/about'  element={<About />} />


        </Routes>
        
        
        </BrowserRouter>
     );
}
 
export default RoutingApp;
