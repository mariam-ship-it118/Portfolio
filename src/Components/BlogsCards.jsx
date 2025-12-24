import React, { Component } from 'react';
import more from '../Assets/more.svg';
import desc from '../Assets/desc.svg';

import './BlogsCards.css';
const BlogsCards = (props) => {
    return ( 

        <>

        
        <section className='ml'>
     <img src={desc} alt="" />
     <div className='blogheading'>
        <h2 className='biggest'>{props.bloghead}</h2>
        <img src={more} alt="" />
     </div>
<p className='blogp'>{props.blogp}</p>
      
         

        </section>
        
        
        
        
        
        
        
        </>
     );
}
 
export default BlogsCards;


//Api error

// import React, { useEffect, useState } from 'react';
// import more from '../Assets/more.svg';
// import desc from '../Assets/desc.svg';
// import './BlogsCards.css';
// import { supabase } from '../Supabase';

// const BlogsCards = () => {
//   const [loading, setLoading] = useState(true);
//   const [info, setInfo] = useState();

//   useEffect(() => {
//     async function getBlog() {
//       const { data, error } = await supabase
//         .from('blogs')
//         .select('*');

//       if (!error) {
//         setInfo(data);
//       } else {
//         console.error(error);
//       }

//       setLoading(false);
//     }

//     getBlog();
//   }, []);

//   if (loading) return <p>Loading...</p>;
  

//   return (
//     <>
//       <section className="ml">
//         <img src={info.blog_img} alt="digital design" />

//         <div className="blogheading">
//           <h2 className="biggest">{info.blog_title}</h2>
//           <img src={more} alt="" />
//         </div>

//         <p className="blogp">{info.blog_pa}</p>
//       </section>
//     </>
//   );
// };

// export default BlogsCards;
