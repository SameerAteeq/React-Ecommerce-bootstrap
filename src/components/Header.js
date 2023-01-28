import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ThemeContext, useThemeHook } from "../GlobalComponent/ThemeProvider";
import { BiSun, BiMoon, BiCart } from "react-icons/bi";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);
  useEffect(() => {
    setTheme(darkMode);
  }, [darkMode]);
  const { isEmpty, totalItems } = useCart();
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      variant={darkMode ? "dark" : "light"}
      className={darkMode ? "bg-light-black" : "bg-light"}
    >
      <Container>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          className={`${
            darkMode ? "text-dark-primary " : "text-light-primary"
          } `}
        >
          Ecommerce Web
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => setDarkMode(!darkMode)}
              className={darkMode ? "text-dark-primary" : "text-light-primary"}
            >
              {darkMode ? <BiSun size="1.3rem" /> : <BiMoon size="1.3rem" />}
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/cart")}
              className={`${
                darkMode ? "text-dark-primary" : "text-light-primary"
              } d-flex align-items-center`}
            >
              <BiCart size="1.6rem" />
              {!isEmpty && (
                <span
                  style={{ position: "relative", left: "-21px", top: "-18px" }}
                >
                  {totalItems}
                </span>
              )}
              <span style={{ marginLeft: !isEmpty ? "-13px" : 0 }}>cart</span>
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/login")}
              className={`nav-link ${
                darkMode ? "text-dark-primary" : "text-light-primary"
              }`}
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
