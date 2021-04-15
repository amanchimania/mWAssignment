// import Button from 'react-bootstrap/Button';
import React from "react";
import "../index.css";
import { FaUserAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
// import { BsSearch } from "react-icons/Bs";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
function Header() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navbar"
        style={{ width: "100vw !important" }}
      >
        <Navbar.Brand href="#home">Bodywise</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Nav className="mr-auto">
            <Nav.Link>Shop</Nav.Link>
            <Nav.Link>Take Self - Assesment</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hair</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Skin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Weight</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">PCOS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>All Products</Nav.Link>
            <Nav.Link>Book Consulation</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <IoNotificationsCircleSharp />
            </Nav.Link>
            <Nav.Link>
              <SiWhatsapp />
            </Nav.Link>
            <Nav.Link>
              <BsSearch />
            </Nav.Link>

            <Nav.Link eventKey={2}>
              <FaUserAlt />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
