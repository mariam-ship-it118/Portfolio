import React, { Component } from 'react';
import StyledText from './TitlesSections';
import './Wireframes.css';
import wireF from '../Assets/wireframing.svg';
const Wireframes = () => {
    return ( 
        <>
        
             <StyledText
        firstPart="Color"
        secondPart="Palette"
        firstColor="#efa94b"       // Light orange color
        secondColor="#3c0f13"      // Dark maroon color
        background="#fde5c7"       // Background color
      />
        
        <img src={wireF} alt="" className='centras' />
        
        
        </>
     );
}
 
export default Wireframes;