import React from 'react'
import ImageCard from './ImageCard';

const ImageList =(props)=> {
    const images = props.images.map((images)=>{
        return <ImageCard key={images.id} image={images} />
    })

    console.log("props",props)
    return (<div>
       {props.term && props.images[0] && (<p>Showing result for {props.term}</p>)}
    <div className='image-list'>{images}</div>
    <footer>
  <h3>Powered by Unsplash Image API</h3>
</footer>
    </div>)
}

export default ImageList;