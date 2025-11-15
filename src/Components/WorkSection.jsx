import React, { Component } from 'react';
import StyledText from './TitlesSections';
import Branding from '../Assets/branding.svg';
import Applications from '../Assets/Apps.svg';
import Websites from '../Assets/websites.svg';
import Digitalart from '../Assets/digitalart.svg';
import './WorkSection.css';
import { Link } from 'react-router-dom';



const WorkSection = () => {
    return ( 

<>


         <StyledText
        firstPart="My"
        secondPart="Work"
        firstColor="#efa94b"       // Light orange color
        secondColor="#3c0f13"      // Dark maroon color
        background="#fde5c7"       // Background color
      />

<section className='divaya'>
    <div>
  
   <img src={Branding} alt="" className='cards' />

<Link to='/apps'>
      <img src={Applications} alt="" />
      </Link>
      </div>
      
      <div>
      <img src={Websites} alt="" />
        <img src={Digitalart} alt="" />
</div>

 
 





</section>


</>


     );
}
 
export default WorkSection;