import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

import './NavBarComponent.css';

const NavBarComponent = () => {
    return (
        <Navbar className="NavBar" variant="light" expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/home/projects">PROJECTS</Nav.Link>
                    <Nav.Link href="/home/juniors">JUNIORS</Nav.Link>
                    <Nav.Link href="/home/about" className="ml-auto" style={{alignSelf: "right"}}>ABOUT</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-dark">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBarComponent;