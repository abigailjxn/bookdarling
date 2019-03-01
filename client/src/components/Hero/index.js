import React, {Component} from "react";
import styles from "./style.css";
import Navigation from "../Navigation";
import SearchBar from "../SearchBar";


class Hero extends Component  {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hero-img">
                <Navigation />
               <SearchBar handleInputChange={this.props.handleInputChange} query={this.props.query} handleSubmit={this.props.handleSubmit}/>
            </div>
        )

    }
}

export default Hero;