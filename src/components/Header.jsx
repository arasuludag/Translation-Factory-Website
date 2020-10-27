import React from "react";
import Scroll from "react-scroll";

import { Container } from "@material-ui/core";

import { Navbar, Nav, Button } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Container maxWidth="lg">
        <Navbar bg="transparent" expand="md">
          <Navbar.Brand href="#home">
            <img
              className="logo"
              src="Translation-Factory.png"
              alt="Translation Factory Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto NavText">
              <Nav.Link
                onClick={() => {
                  Scroll.scroller.scrollTo("aboutUsElement", {
                    smooth: true,
                    duration: 500,
                  });
                }}
              >
                ABOUT US
              </Nav.Link>

              <Nav.Link
                onClick={() => {
                  Scroll.scroller.scrollTo("servicesElement", {
                    smooth: true,
                    duration: 500,
                  });
                }}
              >
                SERVICES
              </Nav.Link>

              <Button variant="outline-dark" onClick={() => {
                Scroll.scroller.scrollTo("contactUsElement", {
                  smooth: true,
                  duration: 500,
                });
              }}>CONTACT US</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;
