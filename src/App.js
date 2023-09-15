
import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Containers from './Components/Containers/Containers';
import NavBar from './Components/Navbar/NavBar';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './Components/Containers/About'
import Detail from './Components/Containers/Detail';
import Error from './Components/Error';
import Form from './Components/Containers/Form';
import Favorites from './Components/Favorites';


const StDiv = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-image: url('https://free4kwallpapers.com/uploads/wallpaper/rick-and-morty-run-4k-wallpaper-1024x768-wallpaper.jpg');

`;

        
export default function App() {
          
          const navigate = useNavigate()
          const { pathname } = useLocation();
          const [access, setAccess] = useState(false)
          const [apiError, setApiError] = useState(null)
          const USER = 'andres@gmail.com'
          const PASSWORD = '1234578'
          
          function onSearch(id) {
            axios(`https://rickandmortyapi.com/api/character/${id}`)
              .then(({ data }) => {
                const char = characters?.find(e => e.id === data.id);
                if (char) {
                  alert('Ya está agregado');
                } else if (data.id !== undefined) {
                  setCharacters(characters => [...characters, data]);
                } else {
                  setApiError('No se encontró el personaje.');
                }
              })
              .catch(error => {
                if (error.response && error.response.status === 500) {
                  setApiError(true);
                } else {
                  setApiError(false);
                }
              })
             
          }
         

          const onClose =(id) => {
            return setCharacters(
              characters.filter((pj)=>{
                return pj.id !== id;
              })
              )
            }
            
            
            const [characters,  setCharacters] = useState([]);
            
            
            useEffect(() => {
              !access && navigate('/');
              // eslint-disable-next-line react-hooks/exhaustive-deps
           }, [access]);
          function login (userData){
            if(userData.password === PASSWORD && userData.user === USER){
              setAccess(true);
              navigate('/home');
            }
          }

            


  return (

  <StDiv>
  


      {pathname !== '/' && <NavBar onSearch={onSearch}  apiError={apiError}/>}
    <Routes>
      
      <Route path='*' element={<Error/>} />
      <Route exact path='/' element={ <Form  login={login} /> } />
      <Route path='/home' element={<Containers key={characters.id} characters={characters} onClose={onClose} />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/favorites' element={<Favorites/>}/>

    
    </Routes>
 
    
  </StDiv>
  );
}


