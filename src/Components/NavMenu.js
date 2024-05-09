import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.css';
import  './NavMenu.css';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


class NavMenu extends Component {
  render() {
    return (
    <>
    <div className='MyNavBar'>
        <Navbar className="justify-content-center" collapseOnSelect fixed='top' expand='sm' bg="dark"  data-bs-theme="dark">
        <Container >
        <Navbar.Brand href="#home">Elhacen Elmoustapha</Navbar.Brand>

          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
         <NavbarCollapse id='responsive-navbar-nav'>

          <Nav className="m-auto">
            <Link to="/AboutMe" className="nav-link" activeClassName="active">About me</Link>
            <Link to="/Experience" className="nav-link">Experience</Link>
            <Link to="/Education" className="nav-link">Education</Link>
            <Link to="/Skills" className="nav-link">Skills</Link>
            <Link to="/Projects" className="nav-link">Projects</Link>
            <Link to="/Blog" className="nav-link">Blog</Link>
            <Link to="/Contact" className="nav-link">Contact</Link>
          </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
      </div>
      </>
    );
  }
}

export default NavMenu;
