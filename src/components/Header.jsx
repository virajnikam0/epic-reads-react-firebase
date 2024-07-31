import React from 'react';
import AppLogo from "./../assets/logos/app-logo.svg";
import "./Header.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as="div">
                        <Link to={"/home"} className="unstyled-link mt-2">
                            <img
                                src={AppLogo} className={'d-inline-block app-logo-size'}
                                />{' '}
                            &nbsp;&nbsp; Epic Reads
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav d-flex">
                        <Nav className="me-auto align-right">
                            <Nav.Link as="div">
                                <Link to="/home" className="unstyled-link mt-2">Home</Link>
                            </Nav.Link>
                            <Nav.Link as="div">
                                <Link to="/about" className="unstyled-link mt-2">About</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
