import React from "react";
import styles from "./style.css";
import Navigation from "../Navigation";
import SearchBar from "../SearchBar";


function Hero () {
    return (
        <div className="hero-img">
            <Navigation />
           <SearchBar />
        </div>
    )
}

export default Hero;