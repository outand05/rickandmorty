import { connect } from "react-redux";
import {CardContainer, StH2} from './StyledComponents'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from './../Redux/actions/actions';
import { useEffect, useState } from 'react';



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
   isFav 
   ? (<button onClick={handleFavorite}>❤️</button>) 
   : (<button onClick={handleFavorite}>🤍</button>)
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