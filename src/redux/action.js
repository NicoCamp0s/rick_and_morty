export const ADD_FAVORITES = "ADD_FAVORITES"
export const DELETE_FAVORITES = "DELETE_FAVORITES"
export const ADD_CHARACTER = "ADD_CHARACTERS"
export const DELETE_CHARATER = "DELETE_CHARACTER"

export const addFavorites = (characters) => {
    return {
        type:ADD_FAVORITES,
        payload: characters
    }
}

export const onSearch = (id) => {
    const URL = "https://be-a-rym.up.railway.app/api";
    const key = "09f9a3ed3588.33f8871711c1c9d99360";

    const oldIds = [...ids];

    if (ids.find((char) => char === id)) {
      return alert("Personaje repetido");
     } else {
      setIds((oldIds) => [...oldIds, id])
     }

    axios(`${URL}/character/${id}?key=${key}`).then((response) => {
      if (response.data.name) {
        setCharacter((oldChars) => [...oldChars, response.data])
      } else {
        setIds(oldIds)
        alert("Algo salió mal");
      }
    });
}