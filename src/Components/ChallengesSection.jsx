import React, { Component } from 'react';
 import StyledText from './TitlesSections';

import './ChallengesSection.css';
import ChallengText from './ChallengText';

const ChallengesSection = (props) => {
    return ( 
        <>
        
        <section>
    
        
            
            <StyledText
        firstPart="C"
        secondPart="hallenges"
        firstColor="#efa94b"       // Light orange color
        secondColor="#3c0f13"      // Dark maroon color
        background="#fde5c7"       // Background color
      />
      <ChallengText heads='Decision Overload:' challenges =' Too many place options make choosing difficult.' />

      <ChallengText heads='Conflicting Preferences: ' challenges =' Different tastes and schedules slow planning.' />
      <ChallengText heads='Scattered Information:' challenges='Students rely on multiple sources to find spots.' />
     <ChallengText heads='Group Coordination Issues:' challenges='Confirming plans and attendance is messy.' />

<ChallengText heads='Low Discoverability:' challenges='Students miss new or suitable places around them.' />
        </section>
        
        
        
        
        </>
     );
}
 
export default ChallengesSection;