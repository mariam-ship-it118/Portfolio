import React, { Component } from 'react';
import './AppsProjects.css';
import TypeSection from '../Components/TypeSection';
import Overview from '../Components/Overview';
import mockup from '../Assets/event.svg';
import ProblemStatement from '../Components/Problem';
import ChallengesSection from '../Components/ChallengesSection';
import ColorPaletteSection from '../Components/ColorPalleteSection';
import Wireframes from '../Components/Wireframes';
import DesignFrames from '../Components/DesignFrames';
import Footer from '../Components/Footer';


const ProjectDetails = () => {
    return ( 

        <>

       
        <section className='detailsbg'>
        <TypeSection sectionname='Case Study' />
<Overview info='Eventor is a student-centered event-planning application designed to simplify the process of choosing where to hang out. The app helps students discover suitable places based on their interests, group size, mood, and location. Instead of spending time debating or searching endlessly for ideas, Eventor provides curated suggestions for cafés, restaurants, study spots, and entertainment venues. Students can create events, invite friends, vote on options, and coordinate details effortlessly. With its modern design and collaborative features, Eventor enhances the student social experience by making hangout planning easy, fast, and enjoyable.' />
        <img src={mockup} alt="graphic designer in Cairo" className='mockuppic' />
    
 <ProblemStatement info='Students often struggle to decide where to hang out, especially when planning group activities. The process usually involves endless suggestions, conflicting preferences, scattered information, and difficulty coordinating everyone’s availability. With no centralized tool tailored to student needs, planning even a simple meetup becomes time-consuming and frustrating. There is a need for a platform that simplifies decision-making, offers relevant place recommendations, and helps students organize events easily and collaboratively. Eventor aims to solve this problem by providing a smart, student-focused event-making experience.' />
    <ChallengesSection />
    <ColorPaletteSection />
    <Wireframes />
    <DesignFrames />






        </section>

    <Footer />

        
        
        </>
     );
}
 
export default ProjectDetails;