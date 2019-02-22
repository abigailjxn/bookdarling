import React from "react";
import styles from "./style.css";
import Navigation from "../Navigation";

function Hero () {
    return (
        <div className="data-uk-position-relative">
            <img id="hero-img" src="/images/library.jpg" />
            <Navigation />
            <button className="data-uk-button data-uk-button-default">Default</button>
        </div>
    )
}

export default Hero;