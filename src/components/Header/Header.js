import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className="topNav">
      <Navbar fixed="top" className="navBar p-1" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="navTitle"><img src={logo} alt="" /> <span>Mini Shop</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="navLink" href="/shop">SHOP</Nav.Link>
              <Nav.Link className="navLink" href="/review">ORDER REVIEW</Nav.Link>
              <Nav.Link className="navLink" href="/inventory">MANAGE INVENTORY</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;