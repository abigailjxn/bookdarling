import React from "react";
import {Link} from "react-router-dom";
import styles from "./style.css";
import Navigation from "../Navigation";
import BackArrow from "../BackArrow";


function NoMatchHero () {
    return (
        <div className="no-match-hero-img">
            <Navigation />
            <div id="no-match-content">
                <h2 id="no-match-text">there's nothing like that here, dear.</h2>
                <Link to="/" id="no-match-link">
                    <BackArrow  width={100} className="arrow-svg"/>
                    <p>back</p>
                </Link>

            </div>
        </div>
    )
}

export default NoMatchHero;