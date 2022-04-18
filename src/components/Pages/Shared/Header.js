import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar variant="dark">
            <Container>
                <div>
                    <h3 className='site-name'>Photo Phactory</h3>
                </div>
                <Nav className="me-auto ms-auto gap-5 navbar">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link>

                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;