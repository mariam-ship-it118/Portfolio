import React, { Component } from 'react';
  import './ContactForm.css';
import { useState } from 'react';
 import {supabase} from '../Supabase';
import StyledText from './TitlesSections';

    
const ContactForm = () => {
     const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [msg, setMsg] = useState("");
   
         async function SaveData() {
                const res= await supabase.from("Messages").insert({"Sender_Name": name, "Clients_emails":email, "Message_Content": msg });
            }

    return ( <>
    
   
          <StyledText
        firstPart="Lets"
        secondPart="Connect"
        firstColor="#efa94b"       // Light orange color
        secondColor="#3c0f13"      // Dark maroon color
        background="#fde5c7"       // Background color
      />

    <form action="" className='gotoleft' onSubmit={SaveData}>
  
<div className='flexato ' >
    <label htmlFor="" className='labels'> Name</label>
     <input type="text" className='ninety' onChange={(v)=> {setName(v.target.value)}} />
</div>
  
     
<div className='flexato ' >
    <label htmlFor="" className='labels'>Email</label>
     <input type="text" className='ninety' onChange={(v)=> {setEmail(v.target.value)}} />
</div>

   
     
<div className='flexato fio ' >
    <label htmlFor="" className='labels'>Message</label>
     <textarea type="text" className='ninety' onChange={(v)=> {setMsg(v.target.value)}} />
</div>

  
   
<button className='addbtn'>Send</button>
  


    </form>
    
    
    
    </> );
}
 
export default ContactForm;


