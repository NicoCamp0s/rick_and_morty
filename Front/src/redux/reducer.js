import * as actions from "./action";

const initialState = {
    access: false,
    characters: [],
    myFavorites: [],
    characterDetail: {},
    error: null
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {

        case actions.REMOVE_ERROR:
            return {
                ...state,
                error: null
            }
        case actions.GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: action.payload,
            }
        
        case actions.CLEAR_DETAIL:
            return {
                ...state,
                characterDetail: {},
            }

        case actions.ADD_FAVORITES:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }

        case actions.DELETE_FAVORITES:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((char) => char.id !== action.payload)
            }

        case actions.ADD_CHARACTER:
            if(state.characters.some(char => char.id === action.payload.id)) {
                return {
                    ...state,
                    error: "PEPE personaje repetido"
                }
            } 
            return {
                ...state,
                characters: [...state.characters, action.payload]
            }

        case actions.GET_FAVORITES:
            return {
                ...state,
                myFavorites: action.payload
            }
           
        case actions.DELETE_CHARATER:
            return {
                ...state,
                characters: state.characters.filter((char) => char.id !== action.payload)
            }

        case actions.VALIDATED:
            return {
                ...state,
                access: true
            }

        case actions.LOGOUT:
            return {
                ...state,
                access: false
            }

        case actions.ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return {...state};
    }
}

export default rootReducer;