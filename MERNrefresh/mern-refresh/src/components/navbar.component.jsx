import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import '../styles/nav.css';

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
      <Link className='title' to="/">Exercise Tracker</Link>
      <Nav className="pl-5">
        <Link className="px-2" to="/">Exercises</Link>
        <Link className="px-2" to="/create">Create exercise</Link>
        <Link className="px-2" to="/user">Create user</Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
