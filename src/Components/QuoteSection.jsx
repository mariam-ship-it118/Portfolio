import React, { Component } from 'react';
import './QuoteSection.css';
import mepic from '../Assets/mepic.svg';
const QuoteSection = (props) => {
    return ( 
        <>
        <section className='quotebg'>
            <h2 className='designer'>{props.authur}</h2>
            <p className='thequote'>{props.quote}</p>
            <p className='bookname'>{props.book}</p>
        </section>
        <img src={mepic} alt="Visual Designer" className='mepicture' />
        
        
        </>
     );
}
 
export default QuoteSection;