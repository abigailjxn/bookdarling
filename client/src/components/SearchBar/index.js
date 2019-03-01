import React, {Component} from "react";
import styles from "./style.css";
import API from "../../utils/API";

const apiKey = process.env.API_Key;

class SearchBar extends Component {
    constructor(props){
        super(props);
    }

   
    
    
    // queryString = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&key=${apiKey}&maxResults=25`;
    

   
    // handleSubmit = event => {
    //     event.preventDefault();
    //     fetch(this.queryString)
    //     .then(results => {
    //         return results.json();
    //     })
    //     .then(data => this.setState({searchResults: data}))
    //     // change query to RegEx for GoogleBooks API Reqest
    //     console.log(this.state.query)
    // }

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
                    <button onSubmit={this.handleSubmit}><i className="fas fa-arrow-right"></i></button>
                </form>
            </div>
        )
    }
}

export default SearchBar;