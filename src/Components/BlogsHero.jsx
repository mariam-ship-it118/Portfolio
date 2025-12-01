import React, { Component } from 'react';
import './BlogsHero.css';
import redstar from '../Assets/starred.svg';

const BlogsHero = (props) => {
    return ( <>
    <section className='startitle'>

    <h1>{props.sectionname}</h1>
    <img src={redstar} alt="visual designer" />
    
    </section>
    
    
    
    
    
    </> );
}
 
export default BlogsHero;