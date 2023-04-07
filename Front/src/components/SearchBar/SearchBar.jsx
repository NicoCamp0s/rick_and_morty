import {useState} from "react";
import Fafa from "./searchBar.module.css";
import img from "../../assest/lupita.png";
import { useDispatch } from "react-redux";

export default function SearchBar({ onSearch }) {
    const [id, setId] = useState("");
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setId(event.target.value);
    }

    const enter = (event) => {
        if (event.key === "Enter") {
            dispatch(onSearch(id))
        }
    }
 
    return (
        <div className={Fafa.searchInput}>
            <input className={Fafa.searchBar} type="search" onChange={handleChange} onKeyDown={enter} />
            <input type="image" src={img} alt="img" className={Fafa.searchButton} onClick={() => onSearch(id)}/>
        </div>
    );
}