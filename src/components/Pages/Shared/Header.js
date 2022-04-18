import React from "react";
import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar variant="dark">
      <Container>
        <div>
          <h3 className="site-name">Photo Phactory</h3>
        </div>
        <Nav className="me-auto ms-auto gap-5 navbar">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About</Link>
          {user ? (
            <button
              className="btn btn-link text-white text-decoration-none"
              onClick={handleSignOut}
            >
              sign out
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
