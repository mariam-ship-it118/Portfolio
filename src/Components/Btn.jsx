import React, { Component } from 'react';
import './Btn.css';
import './AboutSectionRes.css';

const Btn = (props) => {
    return ( 
        <>
        
        
        <button className='btns'>{props.name}</button>
        
        
        </>
     );
}
 
export default Btn;