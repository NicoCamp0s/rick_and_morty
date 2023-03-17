import React from "react";
import {Link, link} from "react-router-dom";
import  SearchBar  from "../SearchBar/SearchBar.jsx";
import Fafa from "./nav.module.css";

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={Fafa.navBar}>
                <SearchBar onSearch={this.props.onSearch} />
                <div className={Fafa.links}>
                    <Link to="/about">
                        <h3 className={Fafa.about}>ABOUT</h3>
                    </Link>
                    <Link to="/home">
                        <h3 className={Fafa.home}>HOME</h3>
                    </Link>
                    <Link to="/">
                        <h3 className={Fafa.logout}
                        onClick={() => this.props.setAccess(false)}>LOGOUT</h3>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Nav;