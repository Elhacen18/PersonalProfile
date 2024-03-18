import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.css';
import  './NavMenu.css';


class NavMenu extends Component {
  render() {
    return (
    <>
        <Navbar bg="dark"  data-bs-theme="dark">
        <Container className="justify-content-center">

          <Nav >
            <Link to="/AboutMe" className="nav-link" activeClassName="active">About me</Link>
            <Link to="/Experience" className="nav-link">Experience</Link>
            <Link to="/Education" className="nav-link">Education</Link>
            <Link to="/Skills" className="nav-link">Skills</Link>
            <Link to="/Projects" className="nav-link">Projects</Link>
            <Link to="/Contact" className="nav-link">Contact</Link>
          </Nav>

        </Container>
      </Navbar>
      <p className='H1'>This website is still under construction</p>
      </>
    );
  }
}

export default NavMenu;
