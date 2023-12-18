// import React from 'react'
// import Searcher from '../Components/Searcher/Searcher'
// import CharacterCards from '../Components/CharacterCards/CharacterCards'
// import { Container, Row } from 'react-bootstrap'

// const Search = () => {
//   return (
//     <>
//       <Container fluid>
//         <Searcher setCharacters={setCharacters} responseInfoRef={responseInfoRef}/>
//         <Row className='justify-content-evenly'>
//           {(characters != undefined) 
//           ? <>
//               {characters.map(character=> 
//               <CharacterCards
//               name={character.name} 
//               gender={character.gender} 
//               img={character.image} 
//               species={character.species} 
//               status={character.status}
//               key={character.id}/>)}
//               {/* <Paginacion /> */}
//             </>
//             : <h1>No se encontró</h1> 
//           }
//         </Row>
//       </Container>
//     </>
//   )
// }

// export default Search