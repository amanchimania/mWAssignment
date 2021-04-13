// import Button from 'react-bootstrap/Button';
import React from "react";
import "../index.css";
import { FaUserAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
// import { BsSearch } from "react-icons/Bs";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
function Navbarx() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navbar"
      >
        <Navbar.Brand href="#home">Bodywise</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Nav className="mr-auto">
            <Nav.Link href="#features">Shop</Nav.Link>
            <Nav.Link href="#pricing">Take Self - Assesment</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hair</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Skin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Weight</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">PCOS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">All Products</Nav.Link>
            <Nav.Link href="#features">Book Consulation</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <IoNotificationsCircleSharp />
            </Nav.Link>
            <Nav.Link href="#deets">
              <SiWhatsapp />
            </Nav.Link>
            <Nav.Link href="#deets">
              <BsSearch />
            </Nav.Link>

            <Nav.Link eventKey={2} href="#memes">
              <FaUserAlt />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navbarx;
