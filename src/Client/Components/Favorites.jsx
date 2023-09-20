import { connect } from 'react-redux';
import { removeFav } from '../Redux/actions/actions';
import { StH2 , CardContainer} from '../Containers/StyledComponents';


const Favorites = ({ myFavorites, removeFav }) => {
    
  const handleRemoveFavorite = (id) => {
     removeFav(id);
    };
  
  return (
    <div>{myFavorites.map((fav) => (
          
        <CardContainer>
         <button onClick={() => handleRemoveFavorite(fav.id)}>X</button>
         <img src={fav.image} alt={fav.name} />
         <>
         <StH2>{fav.name}</StH2> 
         <StH2>{fav.status}</StH2>
         <StH2>{fav.origin.name}</StH2>
         <StH2>{fav.specie}</StH2>
         <StH2>{fav.gender}</StH2>
         </>
        </CardContainer>
        
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, { removeFav })(Favorites)