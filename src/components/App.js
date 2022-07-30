import React from "react";
import axios from "axios";
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
//define a callback function to grab the search terms and return results
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos/', { 
            params: { query: term},
            headers: { 
                Authorization: `Client-ID ${process.env.REACT_APP_unsplashKey}`
            }
        })
    }

    //use the search term to get requests from the API


    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px'}}>
                <h1>Photo Finder</h1>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList />
        </div>
        )
    }
}

export default App;