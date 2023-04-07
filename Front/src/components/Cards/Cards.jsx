import Card from '../Card/Card.jsx';
import Fafa from "./cards.module.css";
import { useSelector } from 'react-redux';

export default function Cards({ characters, onClose }) {
  
  const xd = useSelector(state => state.myFavorites)

    return (
        <div className={Fafa.cards}> 
          {characters.map(({ id, name, species, gender, image }) => {
            return (
              <Card
                fav={xd.some((fav) => fav.id === id)}
                key={id}
                id={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                onClose={onClose}
              />
            );
          })}
        </div>
      );
    }