import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { React, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link,NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [navbar, setNavBar] = useState('navBarScroll p-1');
  const [navTitle,setNavTitle]=useState('navTitle')
  const [navLink,setNavLink]=useState('navLink')
  const [activeColor,setActiveColor]=useState('red')
  const [navVariant,setVariant]=useState('light')
  const scrollWindow = () => {
    if (window.scrollY >= 80) {
      setNavBar('navbar p-1');
      setNavTitle('scrollNavTitle')
      setNavLink('scrollNavLink')
      setActiveColor('red')
      setVariant('dark')
    } else {
      setNavBar('navBarScroll p-1');
      setNavTitle('navTitle')
      setNavLink('navLink')
      setActiveColor('black')
      setVariant('light')
    }
  };
  window.addEventListener("scroll", scrollWindow);
  return (
    <div className="topNav">
      <Navbar  variant={navVariant} fixed="top" className={navbar} expand="lg">
        <Container>
          <Navbar.Brand className={navTitle}>
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              <img src={logo} alt="" /> <span>Mini Shop</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <NavLink exact activeStyle={{color:activeColor}} className={navLink} to="/">
                Shop
              </NavLink>
              <NavLink exact activeStyle={{color:activeColor}} className={navLink} to="/review">
                Order Review 
              </NavLink>
              <NavLink exact activeStyle={{color:activeColor}} className={navLink} to="/inventory">
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
