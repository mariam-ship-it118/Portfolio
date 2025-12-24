import React, { useEffect, useState } from 'react';
import './SoftWare.css';
import './SoftWareRes.css';
import './Applications.css';

import StyledText from './TitlesSections';
import Applicationss from './Applications';

import { supabase } from '../Supabase';

const SoftWare = () => {
  const [loading, setLoading] = useState(true);
  const [software, setSoftware] = useState([]);

  useEffect(() => {
    async function getSoftware() {
      const { data, error } = await supabase
        .from('Home') // table contains software skills
        .select('*');

      if (!error) {
        setSoftware(data);
        setLoading(false);
      }
    }

    getSoftware();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {/* PAGE TITLE */}
      <StyledText
        firstPart="Software"
        secondPart="Skills"
        firstColor="#efa94b"
        secondColor="#3c0f13"
        background="#fde5c7"
      />

      {/* SOFTWARE SKILLS */}
      <div className="software-wrapper">
        {software.map((item) => (
          <section key={item.id} className="polls">
            <Applicationss thesoft={item.Softwares} />

            <img
              src={item.pics}
              alt={item.name}
              className="pollmobile"
            />
          </section>
        ))}
      </div>
    </>
  );
};


export default SoftWare;
