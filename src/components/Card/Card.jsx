import Fafa from "./card.module.css";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../../redux/action";
import { addFavorites } from "../../redux/action";

 function Card({name, species, gender, image, onClose, id}) {
    
    return (
        <div className={Fafa.card} style={{backgroundImage: `url(${image})`}}>
            <button onClick={() => onClose(id)} className={Fafa.botonX}>X</button>    
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

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFavorites: () => {
            dispatch(actions.addFavorites())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);