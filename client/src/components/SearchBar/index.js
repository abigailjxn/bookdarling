import React, {Component} from "react";
import styles from "./style.css";

const apiKey = process.env.API_Key;
let queryString = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}?key=${apiKey}`;

class SearchBar extends Component {
    state = {
        query: ""
    };

    

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]:value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
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