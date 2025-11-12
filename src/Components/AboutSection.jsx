import React from 'react';
import StyledText from './TitlesSections';
import './AboutSection.css';
import Btn from './Btn';



const AboutSection = () => {
  return (
    <div>
       
        <StyledText
        firstPart="About"
        secondPart="Me"
        firstColor="#efa94b"       // Light orange color
        secondColor="#3c0f13"      // Dark maroon color
        background="#fde5c7"       // Background color
      />
     <p className='para'>Hi I am mariam, I am 21 years old, i live in Cairo. i studied at Egypt University of Informatics.I studied UI/UX design, 3d modelling, Branding , UX Research, Video Editing, UX design, UI design, Graphic Design at Uni.  I also took an external graphic design course. I am very passionate about ART ever since childhood. i took lots of different course of art. I started drawing at the age of 5. after taking UI/UX design and graphic design my skill were best in UI design and Graphic design so i decided to improve these skills at most, I worked freelancer as a Graphic designer so I have experience working and I got a great feedback from my clients.</p>
      <p className='para under'>My resume</p>
      
      <div className='butn'>
      <Btn name='Discover more' />

      </div>

    </div>
  );
};
export default AboutSection;
