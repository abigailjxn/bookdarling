import React, {Component} from "react";
import styles from "./style.css";
import API from "../../utils/API";

class SearchBar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="searchbar">
                <form id="search-form" onSubmit={this.props.handleSubmit}>
                    <input id="search-query"
                        value={this.props.query}
                        name="query"
                        onChange={this.props.handleInputChange}
                        type="text"
                        placeholder="the sun and her flowers"/>
                    <button type="submit"><i className="fas fa-arrow-right"></i></button>
                </form >
            </div>
        )
    }
}

export default SearchBar;