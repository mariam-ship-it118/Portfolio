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
  
<div className='wida'>

   <img src={Branding} alt="digital artist" className='cards firstcard' />
</div>

<Link to='/apps'>

<div className='wida sovaa'>

      <img src={Applications} alt="ux designer" className='cards' />
      <div className='overlayer'>
           <h3>Graphic Design</h3>
      </div>
</div>
      </Link>
      </div>
      
      <div>

        
<div className='wida'>
      <img src={Websites} alt="ui designer freelancer" className='cards' />

</div>


<div className='wida sovaa'>

        <img src={Digitalart} alt="graphic designer" className='cards' />

</div>
</div>

 
 





</section>


</>


     );
}
 
export default WorkSection;