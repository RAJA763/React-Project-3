import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#D3D3D3", borderBottom:"3.5px Solid gray"}}>
        <Container>
            <Navbar.Brand href="/" style={{color:"white", fontSize:"1.5rem", fontWeight:"600"}}>TAMILNADU TOURISM</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className='nav-item'>
                    <Nav.Link href="/" style={{color:"white"}}>Home</Nav.Link>
                    <Nav.Link href="/place-to-visit" style={{color:"white"}}>Place To Visit</Nav.Link>
                    <Nav.Link href="/best-time-to-visit" style={{color:"white"}}>Best Time To Visit</Nav.Link>
                    <Nav.Link href="/packages" style={{color:"white"}}>Packages</Nav.Link>
                    <Nav.Link href="/food" style={{color:"white"}}>Food</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation