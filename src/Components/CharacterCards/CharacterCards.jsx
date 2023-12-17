import React, { useEffect } from 'react'
import { Button, Card, Spinner } from 'react-bootstrap'

const CharacterCards = ({name, gender, img, species, status}) => {
  let color
  if (status ==='Alive') color = 'green'
  if (status ==='Dead') color = 'red'
  if (status ==='unknown') color = 'yellow'
  return (
    <Card className='col-5 mb-4 col-md-3 col-lg-2 mx-md-1 p-0' data-bs-theme='dark'>
      <Card.Img variant="top" src={img} />
      <Card.Body className='d-flex flex-column align-items-between justify-content-between'>
        <Card.Title>
          {name}
          <p className='fw-light'>{gender}</p>
        </Card.Title>
        <Card.Text>
          <div className='d-flex flex-column align-items-end'>
            <span>{species} - {status}
            </span>
              <div style={{
                marginTop:'7px',
                textAlign:'end',
                width:'13px',
                height:'13px',
                borderRadius:'50%',
                backgroundColor: color,
              }}></div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CharacterCards