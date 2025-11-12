import React, { Component } from 'react';
import Bm from '../Assets/burgermenu.svg';
import Logo from '../Assets/logo.svg';
import './NavBar.css';
import Btn from './Btn';
const NavBar = () => {
    return ( 
        <>
        
        <nav>
            <ul className='dis'>
                <li><img src={Bm} alt="" /></li>
                <li><img src={Logo} alt="" /></li>
              <li> <Btn name='Reach out!' /></li> 
            </ul>
        </nav>
        
        
        </>
     );
}
 
export default NavBar;