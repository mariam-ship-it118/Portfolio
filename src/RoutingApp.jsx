import React, { Component } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import AppsProjects from './Pages/AppsProjects';
import ProjectDetails from './Pages/ProjectDestails';

const RoutingApp = () => {
    return ( 

        <BrowserRouter>
        <Routes>

       <Route path='/'  element={<Home />} />
       <Route path='/about'  element={<About />} />
       <Route path='/apps' element={<AppsProjects />} />
              <Route path='/projectdetails' element={<ProjectDetails />} />

        </Routes>
        
        
        </BrowserRouter>
     );
}
 
export default RoutingApp;
