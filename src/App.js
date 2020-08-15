import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from './components/ImageList'
import axios from "axios";


export default class App extends Component {
  state={images:[],term:'', total:0}

  onSearchSubmit =async term =>{
    console.log(term);
    this.setState({term: term})
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: process.env.REACT_APP_SECRET_KEY
      }
    });
    console.log(response.data.total)
    this.setState({images: response.data.results, total: response.data.total})
  }

  render() {
    console.log("app",this.state.images)
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="gallery">
        <ImageList term={this.state.term} images={this.state.images} />
        </div>
        
        </div>
    );
  }
}
