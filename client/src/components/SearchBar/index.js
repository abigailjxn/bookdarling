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
                <form id="search-form">
                    <input id="search-query"
                        value={this.props.query}
                        name="query"
                        onChange={this.props.handleInputChange}
                        type="text"
                        placeholder="the sun and her flowers"/>
                    <button onSubmit={this.props.handleSubmit}><i className="fas fa-arrow-right"></i></button>
                </form>
            </div>
        )
    }
}

export default SearchBar;