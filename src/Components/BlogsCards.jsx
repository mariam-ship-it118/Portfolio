import React, { Component } from 'react';
import more from '../Assets/more.svg';
import desc from '../Assets/desc.svg';
import './BlogsCards.css';
const BlogsCards = (props) => {
    return ( 
        <>
        <section className='ml'>
     <img src={desc} alt="" />
     <div className='blogheading'>
        <h2 className='biggest'>{props.bloghead}</h2>
        <img src={more} alt="" />
     </div>
<p className='blogp'>{props.blogp}</p>



        </section>
        
        
        
        
        
        
        
        </>
     );
}
 
export default BlogsCards;