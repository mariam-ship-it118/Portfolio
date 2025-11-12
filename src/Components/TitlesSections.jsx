import React from 'react';

const Titles = ({ firstPart, secondPart, firstColor, secondColor, background }) => {
  const containerStyle = {
     marginleft: '5%',
    fontFamily: 'Thunky',
    fontWeight: '100',
    fontSize: '7vw',
    padding: '20px',
    display: 'inline-block',
  };

  return (
    <div style={containerStyle} className='ml'>
      <span style={{ color: firstColor || '#efb55a' }}>{firstPart}</span>
      <span style={{ color: secondColor || '#3a0b0b' }} className='partof'>{secondPart}</span>
    </div>
  );
};

export default Titles;
