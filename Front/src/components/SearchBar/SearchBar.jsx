import {useState} from "react";
import Fafa from "./searchBar.module.css";
import img from "../../assest/lupita.png";

export default function SearchBar({ onSearch }) {
    const [id, setId] = useState("");

    const handleChange = (event) => {
        setId(event.target.value);
    }
    return (
        <div className={Fafa.searchInput}>
            <input className={Fafa.searchBar} type="search" onChange={handleChange} />
            <input type="image" src={img} className={Fafa.searchButton} onClick={() => onSearch(id)}/>
        </div>
    );
}