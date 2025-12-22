import React, { Component } from 'react';
import StyledText from './TitlesSections';
import './LanguagesSection.css';
import './LanguageSectionRes.css';
const LanguagesSection = () => {
    return ( 
        <>
            <StyledText
        firstPart="L"
        secondPart="anguages"
        firstColor="#efa94b"       // Light orange color
        secondColor="#3c0f13"      // Dark maroon color
        background="#fde5c7"       // Background color
      />
        

<section className='lang'>
    <p>Arabic</p>
    <p>English</p>
    <p> French</p>
</section>
 

        </>
     );
}
 
export default LanguagesSection;