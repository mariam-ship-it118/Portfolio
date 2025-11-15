import React, { Component } from 'react';
import StyledText from './TitlesSections';
import './Wireframes.css';
import Desi from '../Assets/design.svg';
const DesignFrames = () => {
    return ( 
        <>
        
             <StyledText
        firstPart="Color"
        secondPart="Palette"
        firstColor="#efa94b"       // Light orange color
        secondColor="#3c0f13"      // Dark maroon color
        background="#fde5c7"       // Background color
      />
        
        <img src={Desi} alt="" className='centras' />
        
        
        </>
     );
}
 
export default DesignFrames;