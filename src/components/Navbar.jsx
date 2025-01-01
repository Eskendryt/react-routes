import React from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <BootstrapNavbar bg="light" data-bs-theme="light" style={{ borderBottom: "2px solid black" }}>
      <Container className="d-flex justify-content-between align-items-center">
        <BootstrapNavbar.Brand href="#">Company Name</BootstrapNavbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/features">
            Features
          </Nav.Link>
          <Nav.Link as={NavLink} to="/enterprise">
            Enterprise
          </Nav.Link>
          <Nav.Link as={NavLink} to="/pricing">
            Pricing
          </Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
