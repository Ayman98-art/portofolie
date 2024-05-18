// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import logo from '../../assets/logo/logo.png';
import DarkMood from '../DarkMood/DarkMood';

import './Navbar.css';


function NavbarBasic() {
return (
<>
    <Navbar expand ='lg' >
    <Container>
    <Navbar.Brand href="#" className='warpLogo' >
        <img className='logo'
        src= {logo} 
        alt='logo-portofolie'
        />
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">

    <Nav
        className="m-auto my-2 my-lg-0" navbarScroll>

    <Link 
    spy={true}
    smooth={true} 
    offset={0} 
    duration={250}
    className='nav-link' 
    to="Profile">
    Profile
    </Link>

    <Link 
    spy={true}
    smooth={true} 
    offset={0} 
    duration={250}
    className='nav-link' 
    to="Projects">
    Projects
    </Link>
    
    <Link 
    spy={true}
    smooth={true} 
    offset={0} 
    duration={250}
    className='nav-link' 
    to="Skilles">
    Skilles
    </Link>
    
    <Link 
    spy={true}
    smooth={true} 
    offset={50} 
    duration={250}
    className='nav-link' 
    to="Contact">
    Contact
    </Link>
    
    </Nav>

    <DarkMood />

    </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
)
}

export default NavbarBasic;