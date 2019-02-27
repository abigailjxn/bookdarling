import React, {Component} from "react";
import styles from "./style.css";
import API from "../../utils/API";

const apiKey = process.env.API_Key;

class SearchBar extends Component {
    state = {
        query: "",

    };
    
    queryString = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}?key=${apiKey}`;
    

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]:value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        // change query to RegEx for GoogleBooks API Reqest
        console.log(this.state.query)
    }

    render() {
        return (
            <div className="searchbar">
                <form id="search-form">
                    <input id="search-query"
                        value={this.state.query}
                        name="query"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="the sun and her flowers"/>
                    <button onSubmit={this.handleSubmit}><i className="fas fa-arrow-right"></i></button>
                </form>
            </div>
        )
    }
}

export default SearchBar;