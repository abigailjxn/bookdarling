import React, {Component} from "react";
import styles from "./style.css";

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
    //handleSubmit

    render() {
        return (
            <div>
                <form>
                    <input id="search-query"
                        value={this.state.query}
                        name="query"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="milk and honey by rupi kaur"/>
                </form>
            </div>
        )
    }
}

export default SearchBar;