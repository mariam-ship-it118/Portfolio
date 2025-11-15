import React, { Component } from 'react';
import StyledText from './TitlesSections';
import './Overview.css';


const ProblemStatement = (props) => {
    return ( 

        <>
            <StyledText
        firstPart="Problem"
        secondPart="Statement"
        firstColor="#efa94b"       // Light orange color
        secondColor="#3c0f13"      // Dark maroon color
        background="#fde5c7"       // Background color
      />
        
        <p className='infotext'>{props.info}</p>
        





        </>
     );
}
 
export default ProblemStatement;