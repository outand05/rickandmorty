import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from 'styled-components'

const StDiv = styled.div`
align-items:center;
justify-content:space-evenly;
`;
const Button = styled.button`
font-size:10px;
background-color:yellow;
border-radius:0px;
margin:0;

`;

function Detail(){
 const {id} = useParams()
    // const key = 'henrym-hx-cyarossi'
 const [character, setCharacter] = useState({})

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        console.log(data);
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

 return(
   <StDiv>
     
     <div>
     {character.name && <h1 key="id"><b>key</b> {character.id}</h1>}
      {character.name && <h3><b>Name:</b> {character.name}</h3>}  
      {character.status && <h3><b>Status:</b> {character.status}</h3>}
      {character.species && <h3><b>Species:</b> {character.species}</h3>}
      {character.gender && <h3><b>Gender:</b> {character.gender}</h3>}
      {character.origin && <h3><b>Origin:</b> {character.origin.name}</h3>}
     </div>
     
     <div>
      {character.image && <img src={character.image} alt={character.name} />}
     </div>

     <Link to='/home'>
     <button>Ir a Home</button>
     </Link>
     
   </StDiv>
     
   
   
 );

}

export default Detail;

