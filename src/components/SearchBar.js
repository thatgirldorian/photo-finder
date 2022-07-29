import React from "react";


class SearchBar extends React.Component {
    //initialize state 
    state = { term: '' }

    //add an event handler to the form to disable default submit
    onFormSubmit(event) {
        event.preventDefault()
    }

    render() {
        return (
            <div className="ui segment">
                <form
                    onSubmit={this.onFormSubmit}
                    className="ui form"
                >
                    <div className="field">
                        <label>Search for photos</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(event) => this.setState({ term: event.target.value})} 
                            />
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