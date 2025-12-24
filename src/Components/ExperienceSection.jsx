import React, { Component } from 'react';
import StyledText from './TitlesSections';
import './ExperienceSection.css';
import './ExperienceSectionRes.css';
import { supabase } from '../Supabase';
import { useState } from 'react';
import { useEffect } from 'react';

const ExperienceSection = () => {
  const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState([]);
  
    useEffect(() => {
      async function getAllProjectsAPI() {
        const { data, error } = await supabase
          .from('Home')
          .select('*') .eq('id', 7) // replace 1 with the ID of the quote you want
        .single();    // ensures only one row is returned
;
  
        if (!error) {
          setInfo(data);
          setLoading(false);
        }
      }
  
      getAllProjectsAPI();
    }, []);
  
    if (loading) return <p>Loading...</p>;
  
    return ( 
        <>
        
          <StyledText
        firstPart="E"
        secondPart="xperience"
        firstColor="#efa94b"       // Light orange color
        secondColor="#3c0f13"      // Dark maroon color
        background="#fde5c7"       // Background color
      />
        
    
        <p key={info.id} className="para sola">
          {info.textP}
        </p>
   

      
        </>
     );
}
 
export default ExperienceSection;