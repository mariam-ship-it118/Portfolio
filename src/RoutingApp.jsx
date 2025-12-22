import React, { Component } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import AppsProjects from './Pages/AppsProjects';
import ProjectDetails from './Pages/ProjectDestails';
import AboutMeVisualDesigner from './Pages/about-me-visual-designer';
import BlogsMain from './Pages/BlogsMain';
import LookingForVisualDesigner from './Pages/Looking-for-a-visual-designer';
import TestApi from './Pages/TestApi';
import ContactForm from './Components/ContactUs';

const RoutingApp = () => {
    return ( 

        <BrowserRouter>
        <Routes>

       <Route path='/'  element={<Home />} />
       <Route path='/about'  element={<About />} />
       <Route path='/apps' element={<AppsProjects />} />
         <Route path='/projectdetails' element={<ProjectDetails />} />
       <Route path='/me' element={<AboutMeVisualDesigner />}/>
      <Route path='/blogs' element={<BlogsMain />} />
      <Route path='/blogs/looking-for-a-visual-designer' element={<LookingForVisualDesigner />} />

            <Route path='/test' element={<TestApi/>} />
<Route path='contact-us' element={<ContactForm />} />
      
      
        </Routes>
        
        
        </BrowserRouter>
     );
}
 
export default RoutingApp;
