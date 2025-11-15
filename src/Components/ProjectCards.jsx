import React, { Component } from 'react';
import app1 from '../Assets/app1.svg';
import app2 from '../Assets/app2.svg';
import app3 from '../Assets/app3.svg';
import './ProjectCards.css';
const ProjectCards = () => {
    return ( <>
    <section className='centerCards'> 

    <img src={app1} alt="UI/UX Designer freelancer" className=''/>
        <img src={app2} alt="UI/UX Designer freelancer" className=''/>
        <img src={app3} alt="UI/UX Designer freelancer" className='spare'/>

    </section>
    
    </> );
}
 
export default ProjectCards;