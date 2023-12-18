import Pagination from 'react-bootstrap/Pagination';

const Paginacion = ({i, setParams, params, totalPages}) => {
  const handleClick = (number) =>{
    params.set('page', number)
    setParams(params)
  }
  return (
    <Pagination>
    {i>1
    ? <>
        <Pagination.First onClick={()=>handleClick(1)}/>
        {/* <Pagination.Prev onClick={()=>handleClick(i-1)}/> */}
        <Pagination.Item onClick={()=>handleClick(i-1)}>{i-1}</Pagination.Item> 
      </>
    : <>
        <Pagination.First disabled />
        {/* <Pagination.Prev disabled /> */}
        <Pagination.Item disabled>{i-1}</Pagination.Item>
      </>
    }

      <Pagination.Item active>{i}</Pagination.Item>

    {i<totalPages
    ? <>
        <Pagination.Item onClick={()=>handleClick(i+1)} >{i+1}</Pagination.Item>
        {/* <Pagination.Next onClick={()=>handleClick(i+1)} /> */}
        <Pagination.Last onClick={()=>handleClick(totalPages)}/>
      </>
    : <>
        <Pagination.Item disabled >{i+1}</Pagination.Item>
        {/* <Pagination.Next disabled /> */}
        <Pagination.Last disabled/>
      </>
    }
    </Pagination>
  );
}

export default Paginacion;