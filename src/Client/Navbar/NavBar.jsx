import styled from 'styled-components'
import SearchBar from './SearchBar';
import {NavLink} from 'react-router-dom'
import { Button } from '../Containers/StyledComponents';

const StyledDiv = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px;
  margin-top: 2rem;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 50px hsla(0, 10%, 75%, 0.99);
  background-color: hsla(40, 100%, 30%, 0.6);
`;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const NavBar = (props)=> {

 const {apiError} = props
    return(
        <>
            <StyledDiv>
            <ButtonsContainer>
            <NavLink to='/home'>
               <Button>Home</Button>
           </NavLink>
           <NavLink to='/favorites'>
               <Button>favoritos</Button>
           </NavLink>
           <NavLink to='/about'>
               <Button>About</Button>
           </NavLink>
            </ButtonsContainer>
                
        
            <SearchBar onSearch={props.onSearch} />

            </StyledDiv>
            {apiError ? <p>solo caracteres numericos</p> : null}

        </>
    
    );
}

export default NavBar;
