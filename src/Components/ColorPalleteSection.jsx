import React, { Component } from 'react';
import StyledText from './TitlesSections';
import Prime from '../Assets/Primary.svg';
import Sec from '../Assets/BackgroundColor.svg';
import './ColorPalleteSection.css';
const ColorPaletteSection = () => {
    return ( 
        <>
        
        
             <StyledText
        firstPart="C"
        secondPart="hallenges"
        firstColor="#efa94b"       // Light orange color
        secondColor="#3c0f13"      // Dark maroon color
        background="#fde5c7"       // Background color
      />
      
      <section className='halfing'>
        <img src={Prime} alt="" />
        <img src={Sec} alt="" />
      </section>
      
      </>
     );
}
 
export default ColorPaletteSection;