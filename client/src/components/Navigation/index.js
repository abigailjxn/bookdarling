import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.css";


function Navigation () {
    return (
       <nav id="navbar">
        <div id="left-nav">
           <img src="" />
           
        </div>
        <div id="right-nav">
           <Link to="/" id="nav-search">search</Link>
           <Link to="/books" id="nav-saved">saved</Link>
        </div>
       </nav>
    )
}


export default Navigation;