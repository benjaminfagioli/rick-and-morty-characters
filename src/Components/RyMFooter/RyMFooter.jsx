import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const RyMFooter = () => {
  return (
    <footer>
      <Container>
        <Row className='align-items-center'>
          <Col sm={3}>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" />
          </Col>
          <Col sm={6} className='p-1'>
            <a href="https://rickandmortyapi.com">© https://rickandmortyapi.com ©</a>
          </Col>
          <Col sm={3}>
            <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="" />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default RyMFooter