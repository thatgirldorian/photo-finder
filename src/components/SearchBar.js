import React from "react";


class SearchBar extends React.Component {
    //initialize state 
    state = { term: '' }

    //add an event handler to the form to disable default submit
    onFormSubmit = (event) => {
        event.preventDefault()

        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form
                    onSubmit={this.onFormSubmit}
                    className="ui form"
                >
                    <div className="field">
                        <label>Search for stock photos below</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value})} 
                            />
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar;