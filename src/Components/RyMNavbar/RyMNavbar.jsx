import React from 'react'
import RyMLogo from '../../assets/rymLogo'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RyMNavbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className='z-3' >
      <Container>
        <Navbar.Brand href="#home"><RyMLogo w={'50'} h={'50'} c={'#b2cadf'}/></Navbar.Brand>
        <Nav className="ms-auto">
          <Link to={'/'}>Home</Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default RyMNavbar
