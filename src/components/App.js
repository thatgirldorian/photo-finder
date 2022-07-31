import React from "react";
import unsplashApi from '../api/unsplashApi'
import SearchBar from './SearchBar'
import ImageList from './ImageList'


class App extends React.Component {
//initialize state
state = { images: [] };

//define a callback function to grab the search terms and return results
    onSearchSubmit = async term => {
        const response = await unsplashApi.get('/search/photos', { 
            params: { query: term}
        })

        //update state
        this.setState({ images: response.data.results })

    }


    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px'}}>
                <h1>Photo Finder</h1>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <ImageList images={this.state.images} />
        </div>
        )
    }
}

export default App;