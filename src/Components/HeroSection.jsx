import React, { Component } from 'react';
import './HeroSectionRes.css';
import './HeroSection.css';
import MyName from './MyName';
import VisualDesigner from './VisualDesigner';
import Porto from './Porto';
import Cinnabon from '../Assets/Cinnabon.svg';

const HeroSection = () => {
    return ( 
        <>
        
         <section className='dispose'>
         <div className='widdy'>
        <MyName />
       <VisualDesigner />
<Porto />
            
            </div>   
<img src={Cinnabon} alt="" className='cinnabonaya' />
            </section>    

        
        
        
        </>
     );
}
 
export default HeroSection;