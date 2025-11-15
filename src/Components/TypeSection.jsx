import React, { Component } from 'react';
import './TypeSection.css';
import thestar from '../Assets/thestar.svg';

const TypeSection = (props) => {
    return ( 
        <>
        <h1 className='Sector'>{props.sectionname}</h1>
        <img src={thestar} alt="UI designer" className='stardec' />
        
        
        </>
     );
}
 
export default TypeSection;