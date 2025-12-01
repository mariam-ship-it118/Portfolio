import React, { Component } from 'react';
import StyledText from './TitlesSections';
import Branding from '../Assets/branding.svg';
import Applications from '../Assets/Apps.svg';
import Websites from '../Assets/websites.svg';
import Digitalart from '../Assets/digitalart.svg';
import './WorkSection.css';
import { Link } from 'react-router-dom';
import './WorkSectionRes.css';


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
  
   <img src={Branding} alt="" className='cards firstcard' />

<Link to='/apps'>
      <img src={Applications} alt="" className='cards' />
      </Link>
      </div>
      
      <div>
      <img src={Websites} alt="" className='cards' />
        <img src={Digitalart} alt="" className='cards' />
</div>

 
 





</section>


</>


     );
}
 
export default WorkSection;