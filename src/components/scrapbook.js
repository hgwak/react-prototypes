import React from 'react';
import './scrapbook.css';
import dogImage from './image_data';
import ScrapbookImage from './scrapbook_images';

export default ()=>{
    const images=dogImage.map((item, index)=>{
        return <ScrapbookImage key={index} about={item}/>
    });
    return(
        <div className="scrapbook-container">
            {images}
            {/* <img src={dog} alt=""/> */}
        </div>
    );
}