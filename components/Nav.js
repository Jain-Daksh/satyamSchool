import React from 'react'
import Image from 'next/image'
import Image1 from '../images/logo.svg'
import { Nav, Button, Container } from 'react-bootstrap';
import { Whatsapp } from 'react-bootstrap-icons';

function Navbar() {
  return (
    <div>
      <Nav className="navbar navbar-expand-lg navbar-light bg-white" id="navbar-2">
        <div className='container'>
          <Image
            src={Image1}
            alt="Abc logo"
            className="logo"
            width="150"
            height="150"
          />
          <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className='mx-auto'>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav me-auto mx-auto mb-lg-0">
              </ul>
              <li><a className="nav-link" href="#about">About</a></li>
              <li><a className="nav-link" href="#course">Course</a></li>
              <li><a className="nav-link" href="#images">Gallery</a></li>
              <li><a className="nav-link" href="#contactus">Contact-Us</a></li>
            </div>
          </div>
          <a href="https://api.whatsapp.com/send?phone=919660003808&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank">
            <Whatsapp className="fa fa-whatsapp my-float" size={48} style={{ color: "green" }}></Whatsapp>
          </a>
        </div>
      </Nav>
    </div>
  )
}

export default Navbar
