import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const { REACT_APP_URL, REACT_APP_KEY } = process.env 

const Detail = () => {

  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`${REACT_APP_URL}/character/${detailId}?key=${REACT_APP_KEY}`)
    .then((response) => setCharacter(response.data));
  }, []);

  return (
    <div>
      {character.name ? (
        <>
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin?.name}</p>
          <img src={character.image} alt="img" />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;