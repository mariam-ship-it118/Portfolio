import React, { Component } from 'react';
import './AppsProjects.css';
import TypeSection from '../Components/TypeSection';
import NavBar from '../Components/NavBar';
import ProjectCards from '../Components/ProjectCards';
import Footer from '../Components/Footer';

const AppsProjects = () => {
    return ( 
    <>

    <NavBar />


    
    <section className='bgapps'>

        <TypeSection sectionname='My Apps' />
<ProjectCards />

    </section>
    
    <Footer />
    
    </> );
}
 
export default AppsProjects;