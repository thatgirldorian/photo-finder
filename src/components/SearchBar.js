import React from "react";

class SearchBar extends React.Component {
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Search for photos</label>
                        <input type="text" className="prompt" />
                    </div>
                </form>
            </div>


            // <div class="ui search">
            // <div class="ui icon input">
            // <input class="prompt" type="text" placeholder="Common passwords..." />
            // <i class="search icon"></i>
            // </div>
            // <div class="results"></div>
            // </div>
        )
    }
}


export default SearchBar;