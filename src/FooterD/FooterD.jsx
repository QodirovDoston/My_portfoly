import axios from 'axios'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React, { useEffect, useState } from 'react'
import { Accordion, Button, Col, Container, Form, Row } from 'react-bootstrap'
import './FooterD.css'


const FooterD = () => {

  const [value, setValue] = useState()
  const [postName, setPostName] = useState()
  const [postComment, setPostComment] = useState()

  const postComments = () => {
    axios.post("https://my-json-server-production-a01a.up.railway.app/data", { name: postName, post: postComment })
      .then((res) => {
        alert(res.statusText)
      })
  }

  const getValues = () => {
    axios.get("https://my-json-server-production-a01a.up.railway.app/data")
      .then((responsive) => {
        setValue(responsive?.data)
      })
  }
  useEffect(() => {
    getValues()
  }, [])
  return (
    <>
      <Container>
        <Row className='justify-content-center mt-3'>
          <Col xs={12} lg={6} className='d-block d-sm-block'>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" className='your-name' onChange={(e) => setPostName(e.target.value)} placeholder="Your name" />
              </Form.Group>
              <Form.Group className="comment mb-3" controlId="formBasicPassword">
                <textarea name="text" id="comment" onChange={(e) => setPostComment(e.target.value)} placeholder='Comment' cols="84" rows="5"></textarea>
              </Form.Group>
              <Button className='bootton' style={{ width: "100%" }} id='btn-submit' onClick={postComments} variant="primary" >
                Submit Your Comment
              </Button>
            </Form>
          </Col>
        </Row>
        <Row id='fodrs' className='justify-content-center mt-3 mb-5'>
          <Col xs={12} lg={6} className='d-block d-sm-block'>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>All Comments</Accordion.Header>
                <Accordion.Body>
                  {
                    value?.map((val) => {
                      return (
                        <Accordion id='accordion'>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header id='names'>{val.name}</Accordion.Header>
                            <Accordion.Body id='comment-body'>
                              {val.post}
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      )
                    })
                  }
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row xs={12} lg={6} className='d-block d-sm-block'>
          <div className="bosh">
            <div className='icons'>
              <div className="gap">
                <GitHubIcon id='git' />
                <InstagramIcon id='git' />
                <TelegramIcon id='git' />
                <LinkedInIcon id='git' />
              </div>
              <p className='copy'>Copyright ©2020 All rights reserved </p>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}
export default FooterD
