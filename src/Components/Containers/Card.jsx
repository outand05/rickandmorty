import { connect } from "react-redux";
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions/actions';
import { useEffect, useState } from 'react';

const StH2 = styled.h2`
box-shadow: 0 4px 8px hsla(60,70%,60%, 0.99);
background-color: hsla(120,25%,60%, 0.80);
display:flex;
text-decoration: none;


`;
const CardContainer = styled.div`
width: 300px;
background-color: grey;
border-radius: 10px;
box-shadow: 0 4px 8px hsla(60,70%,60%, 0.99);
margin: 10px;
padding: 20px;
background-color: hsla(250,50%,75%, 0.4);
flex-direction: column;
align-items: center;
text-decoration: none;
`;

const Card = ({image,name,status,specie,origin,gender,onClose,id,myFavorites,addFav,removeFav}) =>   {
    
    const [isFav, setIsFav] = useState(false)

    
    function handleFavorite(){
        if(isFav){
            setIsFav(false);
            removeFav(id);
        }else{
            setIsFav(true);
            addFav({
              image,
              name,
              status,
              specie,
              origin,
              gender,
              onClose,
              id,
            });
        }
    }
    
    useEffect(() => {
        console.log(isFav);
        myFavorites.forEach((fav) => {
           if (fav.id === id) {
              setIsFav(true);
           }
        });
     }, [myFavorites]);
    
     return (
         <CardContainer>  
           {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
            <button onClick={()=> onClose(id)}>x</button> 
            <Link to={`/detail/${id}`}>
                    <img src={image} alt={name} />
                <div>

                    <StH2>{name}</StH2> 
                    <StH2>{status}</StH2>
                    <StH2>{origin.name}</StH2>
                    <StH2>{specie}</StH2>
                    <StH2>{gender}</StH2>
                </div>
            </Link>
        </CardContainer>
    );

}
export function mapDispatchToProps(dispatch){
    return{
        addFav: function(character){
            dispatch(addFav(character))
        },
        removeFav: function(id){
            dispatch(removeFav(id))
        }
    }
}
export function mapStateToProps(state){
    return{
        
        myFavorites: state.myFavorites
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Card);