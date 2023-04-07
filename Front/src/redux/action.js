import axios from "axios"
export const ADD_FAVORITES = "ADD_FAVORITES"
export const DELETE_FAVORITES = "DELETE_FAVORITES"
export const ADD_CHARACTER = "ADD_CHARACTERS"
export const DELETE_CHARATER = "DELETE_CHARACTER"
export const VALIDATED = "VALIDATED"
export const LOGOUT = "LOGOUT"
export const GET_FAVORITES = "GET_FAVORITES"
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL"
export const REMOVE_ERROR = "REMOVE_ERROR"
export const CLEAR_DETAIL = "CLEAR_DETAIL"
export const ERROR = "ERROR"
const { REACT_APP_URL, REACT_APP_KEY } = process.env 

export const removeError = () => {
    return {
        type: REMOVE_ERROR
    }
}

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
    if(id) {    
        return async function (dispatch) {
            const response = await axios(`${REACT_APP_URL}/character/${id}?key=${REACT_APP_KEY}`)
            dispatch({
                type: ADD_CHARACTER,
                payload: response.data
            })
        }
    }
    return function (dispatch) {
        dispatch({
            type: ERROR,
            payload: "Se necesita un id"
        })
    }

}

export const deleteCharacters = (id) => {
    return {
        type:DELETE_CHARATER,
        payload: id
    }
}

export const addFavorites = (characters) => {
    return {
        type:ADD_FAVORITES,
        payload: characters
    }
}

export const deleteFavorites = (id) => {
    return {
        type:DELETE_FAVORITES,
        payload: id
    }
}

export const getCharacterDetail = (id) => {
    return async function (dispatch) {
        const response = await axios.get(`${REACT_APP_URL}/character/${id}?key=${REACT_APP_KEY}`)
        dispatch({
            type: GET_CHARACTER_DETAIL,
            payload: response.data
        })
    }
}

export const clearDetail = () => {
    return function (dispatch) {
        dispatch({
            type: CLEAR_DETAIL,
        })
    } 
}