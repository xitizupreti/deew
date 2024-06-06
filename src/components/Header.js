import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="nav bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">DevOps Developer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav1 me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/userlist">UserList</Nav.Link>
              <Nav.Link href="/adduser">Add User</Nav.Link>
            </Nav>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
