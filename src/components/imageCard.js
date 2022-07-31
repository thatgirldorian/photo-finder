import React from "react";

class ImageCard extends React.Component {
    //add a constructor function 
    constructor(props) {
        super(props)

        //initialize state 
        this.state = { spans : 0 }

        //create a ref to use for the images
        this.imageRef = React.createRef()
    }

    //access the image reference
    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight

        const spans = Math.ceil(height / 10) 

        this.setState({ spans })
    }


    render() {
        const { description, urls } = this.props.image

        return <div style={{ gridRowEnd: `span ${this.state.spans}`}} >
                <img 
                src={urls.regular} 
                alt={description}
                ref={this.imageRef}
                />
                </div>
    }
}


export default ImageCard;