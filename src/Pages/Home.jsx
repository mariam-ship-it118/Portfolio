import React, { Component } from 'react';
import NavBar from '../Components/NavBar';

import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import WorkSection from '../Components/WorkSection';
import SoftWare from '../Components/SoftWare';
import EducationSection from '../Components/EducationSection';


const Home = () => {
    return ( 


        <>
        <NavBar />
  <HeroSection />
<AboutSection />
<WorkSection />
<SoftWare />
<EducationSection />

        </>
     );
}
 
export default Home;