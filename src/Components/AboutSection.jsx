import React, { useEffect, useState } from 'react';
import StyledText from './TitlesSections';
import Btn from './Btn';
import { Link } from 'react-router-dom';
import { supabase } from '../Supabase';
import './AboutSection.css';

const AboutSection = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function getAllProjectsAPI() {
      const { data, error } = await supabase
        .from('Home')
        .select('*')  .eq('id', 1) // replace 1 with the ID of the quote you want
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
    <div>
      <StyledText
        firstPart="About"
        secondPart="Me"
        firstColor="#efa94b"
        secondColor="#3c0f13"
        background="#fde5c7"
      />

  
        <p key={info.id} className="para sola">
          {info.textP}
        </p>
  
      <p className="para under">My resume</p>

      <div className="butn">
        <Link to="/me">
          <Btn name="Discover more" />
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
