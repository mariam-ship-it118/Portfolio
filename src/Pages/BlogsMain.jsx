import React, { Component } from 'react';
import BlogsHero from '../Components/BlogsHero';
import NavBar from '../Components/NavBar';
import BlogsCards from '../Components/BlogsCards';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';


const BlogsMain = () => {
    return ( <>
    
    <NavBar />
    <BlogsHero sectionname='Best of blogs,' />


    <Link to="/blogs/looking-for-a-visual-designer'">
    <BlogsCards bloghead='Looking for a visual designer?' blogp='I studied UI/UX design, 3d modelling, Branding , UX Research, Video Editing, UX design, UI design, Graphic Design at Uni. I also took an external graphic design course. I am very passionate about ART ever since childhood. i took lots of different course of art. I started drawing at the age of 5. after taking UI/UX design and graphic design my skill were best in UI design and Graphic design so i decided to improve these skills at most, I worked freelancer as a Graphic designer so I have experience working and I got a great feedback from my clients...'  />
    </Link>
    
       <BlogsCards bloghead='Looking for a visual designer?' blogp='I studied UI/UX design, 3d modelling, Branding , UX Research, Video Editing, UX design, UI design, Graphic Design at Uni. I also took an external graphic design course. I am very passionate about ART ever since childhood. i took lots of different course of art. I started drawing at the age of 5. after taking UI/UX design and graphic design my skill were best in UI design and Graphic design so i decided to improve these skills at most, I worked freelancer as a Graphic designer so I have experience working and I got a great feedback from my clients...'  />
    
  
     <BlogsCards bloghead='Looking for a visual designer?' blogp='I studied UI/UX design, 3d modelling, Branding , UX Research, Video Editing, UX design, UI design, Graphic Design at Uni. I also took an external graphic design course. I am very passionate about ART ever since childhood. i took lots of different course of art. I started drawing at the age of 5. after taking UI/UX design and graphic design my skill were best in UI design and Graphic design so i decided to improve these skills at most, I worked freelancer as a Graphic designer so I have experience working and I got a great feedback from my clients...'  />
    
  
     <BlogsCards bloghead='Looking for a visual designer?' blogp='I studied UI/UX design, 3d modelling, Branding , UX Research, Video Editing, UX design, UI design, Graphic Design at Uni. I also took an external graphic design course. I am very passionate about ART ever since childhood. i took lots of different course of art. I started drawing at the age of 5. after taking UI/UX design and graphic design my skill were best in UI design and Graphic design so i decided to improve these skills at most, I worked freelancer as a Graphic designer so I have experience working and I got a great feedback from my clients...'  />
    
  

     <BlogsCards bloghead='Looking for a visual designer?' blogp='I studied UI/UX design, 3d modelling, Branding , UX Research, Video Editing, UX design, UI design, Graphic Design at Uni. I also took an external graphic design course. I am very passionate about ART ever since childhood. i took lots of different course of art. I started drawing at the age of 5. after taking UI/UX design and graphic design my skill were best in UI design and Graphic design so i decided to improve these skills at most, I worked freelancer as a Graphic designer so I have experience working and I got a great feedback from my clients...'  />
    
  <Footer />
    
    </> );
}
 
export default BlogsMain;