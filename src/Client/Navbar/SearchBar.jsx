import React, {useState} from 'react';
import styled from 'styled-components'

//-----------Styled-Components-------------//   
const StInput = styled.input`

  width: 200px; /* Ancho del input */
  height: 40px; /* Altura del input */
  margin-right: 10px; /* Espacio entre el input y el botón */
  
`;
const StButton = styled.button`
  width: 100px; 
  background-color:orange;
  color:white; 
  height: 40px; 
  &:hover{
    background-color: yellow;
    color:black;
    
  }
`;
const StDiv = styled.div`
background-color:hsl(0,100%,30%);
padding: 10px;

`;


//-----------Styled-End-------------//

const SearchBar = (props)   =>{
  
  const [id, setId] = useState("")
  
  const  handleChange = (event) =>{
  setId(event.target.value)
  }
    
    return (
<StDiv>
    <StInput type="text" placeholder="Buscar personaje..." onChange={handleChange} value={id}/>
    <StButton  onClick={()=> {props.onSearch(id)}}>Add</StButton>
</StDiv>

    );  
}

export default SearchBar;