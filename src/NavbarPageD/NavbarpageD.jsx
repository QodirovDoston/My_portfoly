import * as React from 'react';
import Myimg from '../Images/My_img.jpg'
import '../NavbarPageD/NavbarD.css'
import { useState } from 'react';
import { Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';

const NavbarpageD = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <>
      <section style={{ overflowX: 'hidden' }} id='contect'>

        <Container >
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#"></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                </Nav>
                <Form style={{ gap: "60px" }} className="d-flex">
                  <Nav.Link href="#action1" className={activeNav === '#home' ? "active" : ""} style={{ fontSize: '25px' }}>Contact</Nav.Link>
                  <Nav.Link href="#blog" onClick={() => setActiveNav('#blog')} className={activeNav === '#blog' ? "active" : ""} style={{ fontSize: '25px' }}>Blog</Nav.Link>
                  <Nav.Link href="works" onClick={() => setActiveNav('#works')} className={activeNav === '#works' ? "active" : ""} style={{ fontSize: '25px' }} >Works</Nav.Link>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div id='watch'>
            <Row className="justify-content-between  container">
              <Col className='d-block d-sm-block col-lg-5 col-12'>
                <section className="navbar_content">
                  <h1 className='hi' >Hi, I am Doston,<br />
                    Creative Technologist</h1>
                  <p className='amet'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam  <br /> consequat sunt nostrud amet.</p>
                  <button className='btndow'>Download Resume</button>
                </section>
              </Col>
              <Col xs={3}>
                <img className='my_img' src={Myimg} alt="" />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  )
}

export default NavbarpageD
