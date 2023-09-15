import { ADD_FAV, REMOVE_FAV } from "./actions/actions";

const initialState = {
    myFavorites : [],   
}

export default function reducer(state = initialState, action){
    
    switch(action.type){
        
        case ADD_FAV:
            return{
                ...state,
                myFavorites:[...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((character) => character.id !== action.payload)
            }
            default:
                return{...state}
    }

    
}