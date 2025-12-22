import React, { useEffect, useState } from 'react';
import {supabase} from '../Supabase';

const ContactForm = () => {
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    async function sendMsg() {
        const res= await supabase.from("Contact").insert({"client":title, "email":email, "msg": msg});
    }
    return ( <>
    
    <form action="" onSubmit={sendMsg}>
        <label htmlFor="">Name</label>
        <input type="text" onChange={(v)=> {setTitle(v.target.value)}} />
        <label htmlFor="" >Email</label>
        <input type="text" onChange={(v)=> {setEmail(v.target.value)}} />
        <label htmlFor="" >Message</label>
        <textarea name="" id="" onChange={(v)=> {setMsg(v.target.value)}}/>
        <button >Send</button>
    </form>
    
    {/* <button onClick={()=>{console.log(title)}}>test</button> */}
    </> );
}
 
export default ContactForm;