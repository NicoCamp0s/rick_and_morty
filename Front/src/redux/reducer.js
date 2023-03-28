import * as actions from "./action";

const initialState = {
    access: false,
    characters: [],
    myFavorites: [],
    ids: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
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
            return {
                ...state,
                characters: [...state.characters, action.payload]
            }
           
        case actions.DELETE_CHARATER:
            return {
                ...state,
                characters: state.characters.filter((char) => char.id !== action.payload),
                ids: state.ids.filter((char) => char !== action.payload)
            }

        case actions.VALIDATED:
            return {
                ...state,
                access: true
            }

        case actions.ADD_IDS:
            return {
                ...state,
                ids: [...state.ids, action.payload]
            }

        case actions.LOGOUT:
            return {
                ...state,
                access: false
            }

        default:
            return {...state};
    }
}

export default rootReducer;