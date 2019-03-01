import React, { Component } from "react";
import Navigation from "../components/Navigation";
import API from "../utils/API";
import "./style.css";


const detailHeroStyles = {
    width: "100vw",
    height: "100vh",
    backgroundImage: "url('/images/detail.jpg')"
}

const contentStyles = {
   
   
}

class Detail extends Component {
    state = {
        book: {}
    };

    componentDidMount() {
        API.getBook(this.props.match.params.id)
        .then(res => this.setState({book: res.data}))
        .catch(err => console.log(err));
    }

  render() {
    return (
      <div id="detail-hero-img" style={detailHeroStyles}>
        <Navigation />
        <body className="content-container" style={contentStyles}>
          <h1 id="saved-header">DETAILS</h1>
            <h2 id="detail-book-title">{this.state.book.title}</h2>
            <h3 id="detail-book-author">{this.state.book.author}</h3>
            <p>{this.state.book.description}</p>
            <span><i class="fas fa-star"></i> | delete</span>
        </body>
      </div>
    );
  }
}

export default Detail;
