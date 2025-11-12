import React, { Component } from 'react';
import './Btn.css';


const Btn = (props) => {
    return ( 
        <>
        
        
        <button className='btns'>{props.name}</button>
        
        
        </>
     );
}
 
export default Btn;