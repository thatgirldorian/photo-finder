import React from "react";
import SearchBar from './SearchBar'
import ImageList from './ImageList'

const App = () => {
    return (
        <div className="ui container">
            <h1>Photo Finder</h1>
            <SearchBar />
            <ImageList />
    </div>
    )

}

export default App;