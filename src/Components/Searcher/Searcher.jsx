import React, { useEffect } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
const URL_BASE = import.meta.env.VITE_URL_CHARACTERS


const Searcher = ({setCharacters, responseInfoRef, params, setParams, setIsloading}) => {
  const getData = async()=>{
    try {
      setIsloading(true)
      let data = await fetch(`${URL_BASE}?name=${params.get('name') || ''}&page=${params.get('page') || 1}`)
      let response = await data.json()
      setCharacters(response.results)
      responseInfoRef.current = response.info
      console.log(response);
    } catch (error) {
      console.log(error.message);
    } finally{
      setIsloading(false)
    }
    }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setParams({
      name: e.target[0].value,
    })
  }
  useEffect(()=>{
    getData()
  },[params])
  return (
    <>
      <Container className='d-flex justify-content-center'>
        <div className='w-100'>
          <Form onSubmit={handleSubmit} className='mb-4'>
            <Form.Group as={Row} className="my-3 align-items-center">
              <Form.Label className='col-3 m-0 text-center'>Character name</Form.Label>
              <Col>
              <Form.Control type="text" id='inputUser' autoComplete='off' />
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