import React, { Component, useEffect, useState } from 'react';
import {supabase} from '../Supabase';


const TestApi =() => {  
    const [projects, setProjects] = useState([
    
   {
 about_me: "",
    
    created_at: "vnjrnhk,tn",
education: "vjrnjrnkg",
experience: "fngrgn;",
id: "1",
landing_pic: "vnzjrngkndkgnr",
languages: [],
my_pic: "vkdrngk",
polls_img: "vfeogmrek",
quote: "kfbkjr",
resume: "gyfgtyh",
softwares: "mbh",
work: "hvgbhv "
}

]);



// to test elapi
    useEffect(() => {
            
        async function callGetAPI(){
         const res = await supabase.from("Home").select("*");
        // console.log(res.data);
        setProjects(res.data)
        // console.log(res.data[0].languages);
        }
        callGetAPI();
    },[]);



    return ( <>
    
    <p>


    


    {
        projects[0].languages.map((c)=>{

            return <h1>{c}</h1>
        })
    }
        </p>
    </> 
    );
}
 


export default TestApi;



