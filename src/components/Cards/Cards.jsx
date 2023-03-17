import Card from '../Card/Card.jsx';
import Fafa from "./cards.module.css";

export default function Cards(prop) {
    const { characters, onClose } = prop

    return (
        <div className={Fafa.cards}> 
          {characters.map(({ id, name, species, gender, image }) => {
            return (
              <Card
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