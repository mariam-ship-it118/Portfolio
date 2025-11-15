import React, { Component } from 'react';
import logo from '../Assets/logo.svg';
import './Footer.css';

const Footer = () => {
    return ( 
        <>
        
        <footer class="footer">
  <div class="footer-top">
    <h2 class="coloring">Let’s Create Something together.</h2>
  </div>

  <div class="footer-mid">
        <img src={logo} alt="visual designer"/>

    <ul class="footer-links">
      <li>Home</li>
      <li>Work</li>
      <li>About</li>
      <li>Blog</li>
      <li>Contact</li>
    </ul>
    <div class="socials">
    <li>Behance</li>
    <li>Dribble</li>
    <li>LinkedIn</li>
    <li>Instgram</li>
    </div>

  </div>

  <div class="footer-bottom">
    <p class="center wite">© 2025 Maryam Elmarsafy — Visual & UI Designer.</p>
  </div>
</footer>
        
        
        
        
        </>
     );
}
 
export default Footer;