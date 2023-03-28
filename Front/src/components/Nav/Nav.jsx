import React from "react";
import { Link } from "react-router-dom";
import  SearchBar  from "../SearchBar/SearchBar.jsx";
import Fafa from "./nav.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/action.js";

const Nav = ({onSearch}) => {

    const dispatch = useDispatch()

    return (
        <div className={Fafa.navBar}>
            <SearchBar onSearch={onSearch}/>
            <div className={Fafa.links}>
                <Link to="/about">
                    <h3 className={Fafa.about}>ABOUT</h3>
                </Link>
                <Link to="home" >
                    <h3 className={Fafa.home}>HOME</h3>
                </Link> 
                <Link to="/favorites">
                    <h3 className={Fafa.logout}>FAVORITES</h3>
                </Link>  
                <Link to="/" onClick={() => dispatch(logout())}>
                    <h3 className={Fafa.logout}>LOGOUT</h3>
                </Link>  
            </div>
        </div>
    )
}

export default Nav;