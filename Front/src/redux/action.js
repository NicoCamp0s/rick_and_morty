import axios from "axios"
export const ADD_FAVORITES = "ADD_FAVORITES"
export const DELETE_FAVORITES = "DELETE_FAVORITES"
export const ADD_CHARACTER = "ADD_CHARACTERS"
export const DELETE_CHARATER = "DELETE_CHARACTER"
export const VALIDATED = "VALIDATED"
export const ADD_IDS = "ADD_IDS"
export const LOGOUT = "LOGOUT"
const { REACT_APP_URL, REACT_APP_KEY } = process.env 

export const logout = () => {
    return {
        type:LOGOUT
    }
}

export const validate = () => {
    return {
        type: VALIDATED
    }
} 

export const addCharacters = (id) => {

    return function (dispatch) {
        dispatch({ type:ADD_IDS, payload: id})
        axios(`${REACT_APP_URL}/character/${id}?key=${REACT_APP_KEY}`)
        .then((response) => {
            if (response.data.name) {
              dispatch({ type:ADD_CHARACTER, payload:response.data })
            }
        })
    }
}

export const deleteCharacters = (id) => {
    return {
        type:DELETE_CHARATER,
        payload: id
    }
}

export const addIds = (id) => {
    return {
        type: ADD_IDS,
        payload: id
    }   
}

export const addFavorites = (characters) => {
    return {
        type:ADD_FAVORITES,
        payload: characters
    }
}

export const removeFavorites = (id) => {
    return {
        type:DELETE_FAVORITES,
        payload: id
    }
}