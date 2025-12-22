import React, { Component } from 'react';
import Bm from '../Assets/burgermenu.svg';
import Logo from '../Assets/logo.svg';
import './NavBar.css';
import Btn from './Btn';
import { Link } from "react-router-dom";
import BlogsMain from '../Pages/BlogsMain';
import './NavBarRes.css';
const NavBar = () => {
    return ( 
        <>
        
      

<section class="dis fixed">
  

    <div>
        <input type="checkbox" id="menu-toggle" class="burger-toggle"/>
    
      <label for="menu-toggle" class="burger-btn">
        <img src={Bm} class="burger-icon" alt="Menu"/>
    </label>
   
    <div class="sidebar-menu">
      <li>

      <Link class="sidebar-link" to="/" >Home</Link>
      </li>
  
       <li>

      <Link class="sidebar-link" to="/projects">Projects</Link>
     </li>


  <li>

      <Link class="sidebar-link" to="/blogs">Blogs</Link>
     </li>
     
     <li>

      <Link class="sidebar-link" to="/me">About</Link>
     </li>


      <li>

      <Link class="sidebar-link" to="/contact">Contact</Link>
     </li>



    </div>
  
  
    <label for="menu-toggle" class="sidebar-overlay"></label>

    </div>

  <img src={Logo} alt="Graphic designer" class="logo"/>

  <button class="reachbtn">Reach Out!</button>

</section>

        
        </>
     );
}
 
export default NavBar;