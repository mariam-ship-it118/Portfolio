import React, { useState } from 'react';

import './About.css';



const About = () => {
   

   const [count , setCount] = useState(0);

   let increment = () => {


    setCount(count =1);

   }

    
    
  
    
    return ( 
        <>
        <button onClick={increment}>+</button>
        <h1>{count}</h1>
        <button >-</button>
        </>
     );
}
 
export default About;