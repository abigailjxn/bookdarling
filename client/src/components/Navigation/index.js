import React from "react";
import styles from "./style.css";

function Navigation () {
    return (
        <div className="data-uk-position-top">
        <nav className="data-uk-navbar-container data-uk-navbar-transparent" data-uk-navbar>
            <div className="data-uk-navbar-left">
                <ul className="data-uk-navbar-nav">
                    <li className="data-uk-active"><a href="#">Active</a></li>
                    <li><a href="#">Item</a></li>
                    <li>
                        <a href="#">Parent</a>
                        <div className="data-uk-navbar-dropdown">
                            <ul className="data-uk-nav data-uk-navbar-dropdown-nav">
                                <li className="data-uk-active"><a href="#">Active</a></li>
                                <li><a href="#">Item</a></li>
                                <li className="data-uk-nav-header">Header</li>
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                                <li className="data-uk-nav-divider"></li>
                                <li><a href="#">Item</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}


export default Navigation;