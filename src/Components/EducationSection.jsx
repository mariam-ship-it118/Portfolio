import React, { Component } from 'react';
import './EducationSection.css';
import StyledText from './TitlesSections';
import dash from '../Assets/dash.svg';
import EduText from './EduText';
import './EducationSectionRes.css';

const EducationSection = () => {
  
    return ( 
        <>
          <StyledText
        firstPart="E"
        secondPart="ducation"
        firstColor="#efa94b"       // Light orange color
        secondColor="#3c0f13"      // Dark maroon color
        background="#fde5c7"       // Background color
      />

        <section className='location firstlocation'>
            <img src={dash} alt="UI designer" />
            <EduText place='Sacret Heart Ghamra' />
        </section>

         <section className='location'>
            <img src={dash} alt="UI designer" />
            <EduText place='Madinaty Intergrated Language School' />
        </section>
        
         <section className='location'>
            <img src={dash} alt="UI designer" />
            <EduText place='Egypt University of Informatics' />
        </section>

                  <section className='marginL'>
                  <section className='location'>
            <img src={dash} alt="UI designer" />
            <p className='major'>Digital Art and Design</p>

        </section>

          <section className='location'>
            <img src={dash} alt="UI designer" />
            <p className='major'>UI/UX Design</p>

        </section>



                  </section>

        </>
     );
}
 
export default EducationSection;