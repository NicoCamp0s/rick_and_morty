import Fafa from "./card.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/action";
import { useState } from "react";
import { useLocation } from "react-router-dom";

 function Card({name, species, gender, image, onClose, id, fav}) {
    const { pathname } = useLocation()
    const [isFav, setIsFav] = useState(fav)
    const dispatch = useDispatch()

      const handleFavorite = () => {
        if (isFav) {
          setIsFav(false);
          dispatch(actions.deleteFavorites(id));
        } else {
          setIsFav(true);
         dispatch(actions.addFavorites({
            id,
            name,
            species,
            gender,
            image,
          }));
        }
      };
    
    return (
        <div className={Fafa.card} style={{backgroundImage: `url(${image})`}}>
            <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
            {pathname !== "/favorites" && <button onClick={() => onClose(id)} className={Fafa.botonX}>X</button>}    
                <div className={Fafa.sombreado}>
                    <div>
                        <Link to={`/detail/${id}`}>
                            <h2>{name}</h2>
                        </Link>
                    </div>
                    <div>
                        <h3>{species}</h3>
                        <h3>{gender}</h3>
                    </div>
                </div> 
        </div>
    )
}

export default Card;