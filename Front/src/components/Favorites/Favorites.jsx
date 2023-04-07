import Card from "../Card/Card";
import { useSelector } from "react-redux";
import Fafa from "./favorites.module.css";

const Favorites = () => {
    const favorites = useSelector((state) => state.myFavorites)
    console.log(favorites);
    return (
        <div className={Fafa.fav}>
          {favorites.map(({ id, name, species, gender, image }) => {
            return (
              <Card
                fav={true}
                key={id}
                id={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
              />
            );
          })}
        </div>
      );
}

export default Favorites;