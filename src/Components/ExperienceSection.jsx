import React, { Component } from 'react';
import StyledText from './TitlesSections';
import './ExperienceSection.css';
import './ExperienceSectionRes.css';

const ExperienceSection = (props) => {
    return ( 
        <>
          <StyledText
        firstPart="E"
        secondPart="xperience"
        firstColor="#efa94b"       // Light orange color
        secondColor="#3c0f13"      // Dark maroon color
        background="#fde5c7"       // Background color
      />
        
        <p className='textsub'>{props.sub}</p>
        
        </>
     );
}
 
export default ExperienceSection;