import './imageList.css'
import React from "react";
import imageCard from './imageCard'


const ImageList = (props) => {
    //render the images
    const images = props.images.map((image) => {
        return <imageCard key={image.id} image={image} />;
    
    })

    return (
        <div className="image-list">
            {images}
            </div>
    )
}

export default ImageList;