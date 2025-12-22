import React, { Component } from 'react';
import './about-me-visual-designer.css';
import NavBar from '../Components/NavBar';
import TypeSection from '../Components/TypeSection';
import artme from '../Assets/about_me.svg';
import StyledText from '../Components/TitlesSections';
import Footer from '../Components/Footer';


const AboutMeVisualDesigner = () => {
    return ( 
        <>
        <NavBar />
         <TypeSection sectionname='About me' />
        
        <img src={artme} alt="visual designer"  className='mepeek'/>
    
    <section>

<section className='imp'>

     <StyledText
        firstPart="M"
        secondPart="e"
        firstColor="#efa94b"       // Light orange color
        secondColor="#3c0f13"      // Dark maroon color
        background="#fde5c7"       // Background color
        />
        
        </section>
       
<p className='sizetext'>
    Hi I am mariam, I am 21 years old, i live in Cairo. i studied at Egypt University of Informatics.I studied UI/UX design, 3d modelling, Branding , UX Research, Video Editing, UX design, UI design, Graphic Design at Uni.  I also took an external graphic design course. I am very passionate about ART ever since childhood. i took lots of different course of art. I started drawing at the age of 5. after taking UI/UX design and graphic design my skill were best in UI design and Graphic design so i decided to improve these skills at most, I worked freelancer as a Graphic designer so I have experience working and I got a great feedback from my clients.

</p>


        </section>
        
        

    <section>

<section className='imp'>

     <StyledText
        firstPart="Visual"
        secondPart="Designer"
        firstColor="#efa94b"       // Light orange color
        secondColor="#3c0f13"      // Dark maroon color
        background="#fde5c7"       // Background color
        />
        
        </section>
       
<p className='sizetext'>
 I am very passionate about graphic design, I have experience working in group projects, open to learning new thing. In designing I always go for artistic style, one of my strong point are creativity I love expressing my feelings through posters and logos. I love sports; I played different type of sports over the years my favourite was Kick Boxing. I enjoy expressing myself through drawing. I always think out of the box when its comes to art, good communication skills. I took the role of UI designer in a uni group project and we got a really good feedbacks on the UI of the project and the UI section in the project got a high grade. I love the idea of traveling and adventure. I am into wine red colour. I enjoy watching artistic posters full of colours thought I ‘m not really into colours.

</p>


        </section>




    <section>

<section className='imp'>

     <StyledText
        firstPart="Hiring"
        secondPart="a Visual Designer"
        firstColor="#efa94b"       // Light orange color
        secondColor="#3c0f13"      // Dark maroon color
        background="#fde5c7"       // Background color
        />
        
        </section>
       
<p className='sizetext'>
   You want a Graphic designer? I worked as a Graphic Designer freelancer, my feedback from my client is that I am creative when it comes to ideas and my outcome was very good and she really loved the logo. Now what makes my work stand out from graphic designers is that I come from an artistic environment where I speak my mind through designs and I make sure that everything in the project I am working on has a great value. I draw a lot in illustrations even when I am working on projects, also drew on photoshop but I don’t use it often. I am flexible when it comes to work cause I love designing its like I get to show people how use Art as a source of communication.  I think its actually amazing how each graphic designer can express the products in many different ways, that’s how incredible graphic design is.

</p>


        </section>


<Footer/>









        
        
        
        </>
     );
}
 
export default AboutMeVisualDesigner;