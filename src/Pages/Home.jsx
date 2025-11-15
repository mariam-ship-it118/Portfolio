import React, { Component } from 'react';
import NavBar from '../Components/NavBar';

import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import WorkSection from '../Components/WorkSection';
import SoftWare from '../Components/SoftWare';
import EducationSection from '../Components/EducationSection';
import LanguagesSection from '../Components/LanguagesSection';
import ExperienceSection from '../Components/ExperienceSection';
import QuoteSection from '../Components/QuoteSection';
import Footer from '../Components/Footer';


const Home = () => {
    return ( 


        <>
        <NavBar />
  <HeroSection />
<AboutSection />
<WorkSection />
<SoftWare />
<EducationSection />
<LanguagesSection />
<ExperienceSection sub='Designed a complete visual identity for a client, from concept to final logo. Focused on storytelling through design, creating a bold and memorable brand mark. Managed the full process including research, sketching, digital design, and presentation.' />
<QuoteSection authur='Stefan Sagmeister' quote='“Worrying solves nothing. Creativity solves everything.”' book='-Things I Have Learned in My Life So Far' />
    <Footer />
    
    
    
    
    
    
    
        </>
     );
}
 
export default Home;