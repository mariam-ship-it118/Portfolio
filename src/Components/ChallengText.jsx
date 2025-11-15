import React, { Component } from 'react';
import './ChallengText.css';

const ChallengText = (props) => {
    return ( 
        <>
        <section className='subtandtext'>
            <h5>{props.heads}</h5>
            <p>{props.challenges}</p>
        </section>
        
        
        
        
        </>
     );
}
 
export default ChallengText;