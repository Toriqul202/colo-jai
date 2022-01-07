import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navbar.css'
import { Link } from 'react-router-dom';
import firebaseAuth from '../Firebase/firebaseAuth';

const Navbars = () => {
  const {user}=firebaseAuth()
    return (
        <>
           <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark">
    <Container>
    <Navbar.Brand className="logo" href="#home">চলো যাই</Navbar.Brand> 
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link}  to="/addservices">Add Packages</Nav.Link>
      
      <Nav.Link as={Link}  to="/login">Login</Nav.Link>
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
   
    </Container>
    <h4>hlou8</h4>
  </Navbar>   
        </>
    );
};

export default Navbars;