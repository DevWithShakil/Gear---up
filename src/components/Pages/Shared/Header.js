import React from "react";
import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../assest/logo/logo1.png";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar variant="dark">
      <Container>
        <div>
          <img src={logo} alt="" width={'100px'} height={'80px'} />
        </div>
        <Nav className="ms-auto gap-5 navbar">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/blogs">Blog</Link>
          {
            user && <>
              <Link to='/manageinventory'>ManageInventory</Link>
              <Link to='/additem'>Additem</Link>
              <Link to='/mypost'>Mypost</Link>
            </>
          }
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
