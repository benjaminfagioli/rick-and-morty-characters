import React, { useRef, useState } from 'react'
import Searcher from '../Components/Searcher/Searcher'
import CharacterCards from '../Components/CharacterCards/CharacterCards'
import { Container, Row } from 'react-bootstrap'
import Paginacion from '../Components/Pagination/Pagination'
import { useSearchParams } from 'react-router-dom'
import LoadingScreen from '../Components/LoadingScreen/LoadingScreen'

const Home = () => {
  const [characters, setCharacters] = useState([])
  const [isloading, setIsloading] = useState(false)
  const responseInfoRef = useRef({})
  const [params, setParams] = useSearchParams()
  console.log(responseInfoRef.current);
  return (
    <>
    <Container fluid>
      <Searcher setCharacters={setCharacters} setIsloading={setIsloading} params={params} setParams={setParams} responseInfoRef={responseInfoRef}/>
      <Row className='justify-content-evenly'>
        {isloading 
        ? <LoadingScreen/>
        : (characters != undefined) 
          ? <>
              {characters.map(character=> 
              <CharacterCards
              name={character.name} 
              gender={character.gender} 
              img={character.image} 
              species={character.species} 
              status={character.status}
              key={character.id}/>)}
              <div className='d-flex justify-content-center mb-3'>
                <Paginacion 
                totalPages={responseInfoRef.current.pages} 
                setParams={setParams} 
                params={params} 
                i={parseInt(params.get('page')) || 1}/>
              </div>
            </>
            : <h1>No se encontró</h1> 
          }
          
        </Row>
    </Container>
    </>
  )
}
export default Home