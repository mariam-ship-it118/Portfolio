import React, { Component } from 'react';
import './SoftWare.css';
import StyledText from './TitlesSections';
import Applicationss from './Applications';
import figma from '../Assets/figma.svg';
import illustrator from '../Assets/illustrator.svg';
import photoshop from '../Assets/photoshop.svg';
import af from '../Assets/aftereffects.svg';
import vsc from '../Assets/vsc.svg';






const SoftWare = () => {
    return ( 
        <>
        
      <StyledText
        firstPart="Software"
        secondPart="Skills"
        firstColor="#efa94b"       // Light orange color
        secondColor="#3c0f13"      // Dark maroon color
        background="#fde5c7"       // Background color
      />

    <section className='polls'>
     <Applicationss thesoft='Figma' />
     <img src={figma} alt="freelancer" />
    </section>
 <section className='polls'>
     <Applicationss thesoft='Illustrator' />
     <img src={illustrator} alt="creative designer" />
    </section>

 <section className='polls'>
     <Applicationss thesoft='Photoshop' />
     <img src={photoshop} alt="graphic designer" />
    </section>

        <section className='polls'>
     <Applicationss thesoft='After Effects' />
     <img src={af} alt="visual designer" />
    </section>


 <section className='polls'>
     <Applicationss thesoft='Visual Studio Code' />
     <img src={vsc} alt="freelancer designer" />
    </section>













        
        </>
     );
}
 
export default SoftWare;