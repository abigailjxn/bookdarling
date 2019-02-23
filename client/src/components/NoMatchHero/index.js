import React from "react";
import styles from "./style.css";
import Navigation from "../Navigation";


function NoMatchHero () {
    return (
        <div className="no-match-hero-img">
            <Navigation />
            <div id="no-match-content">
                <h2 id="no-match-text">there's nothing like that here, dear.</h2>
                <a id="no-match-link">
                    //arrow
                    back
                </a>

            </div>
        </div>
    )
}

export default NoMatchHero;