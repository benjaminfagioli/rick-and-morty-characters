import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
// import { formContainer } from './Searcher.module.css'
const URL_BASE = import.meta.env.VITE_URL_CHARACTERS


const Searcher = ({setCharacters, responseInfoRef}) => {

  const handleSubmit = async (e)=>{
    e.preventDefault()
    let requestedCharacter = e.target[0].value
    if (!requestedCharacter) return
    try {
      let data = await fetch(`${URL_BASE}?name=${requestedCharacter}`)
      let response = await data.json()
      setCharacters(response.results)
      responseInfoRef.current = response.info
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <Container className='d-flex justify-content-center'>
        <div className='w-100'>
          <Form onSubmit={handleSubmit} className='mb-4'>
            <Form.Group as={Row} className="my-3 align-items-center">
              <Form.Label className='col-3 m-0 text-end'>Character name</Form.Label>
              <Col>
              <Form.Control type="text" autoComplete='off' />
              </Col>
              <Button variant='dark' className='col-3' type='submit'>Search</Button>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </>
  )
}

export default Searcher