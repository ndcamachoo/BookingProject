import React, { useContext } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImagesCarousel.css"
import { Carousel } from 'react-responsive-carousel';
import useMediaQuery from "../../hooks/useMediaQuery";
import { GalleryContext } from "../ProductService/GalleryContext";

const ImagesCarousel = (props) => {

    const {imagesGallery} = props
    const isMobile = useMediaQuery('(max-width: 768px)');
    const {setGallery}= useContext(GalleryContext);

    const handleGallery= ()=>{
        setGallery(false)
    }

    return (
        <div className="carouselContainer">
            <h5 className= "close" onClick={ handleGallery }>X</h5>
            <Carousel
                autoPlay={true}
                infiniteLoop={false}
                interval={3000}
                showThumbs={isMobile? false :true}
                statusFormatter={(currentItem,total) => `${currentItem}/${total}`}
                thumbWidth={100}
                transitionTime={1400}
            >
                <div>
                    <img src={imagesGallery[0]} alt="Imagen del producto" />
                    {/*<p className="legend">Legend 1</p>*/}
                </div>
                <div>
                    <img src={imagesGallery[1]}  alt="Imagen del producto"/>
                </div>
                <div>
                    <img src={imagesGallery[2]}  alt="Imagen del producto"/>
                </div>
                <div>
                    <img src={imagesGallery[3]} alt="Imagen del producto"/>
                </div>
                <div>
                    <img src={imagesGallery[4]} alt="Imagen del producto"/>
                </div>
                
            </Carousel>
        </div>
    );

}


export default ImagesCarousel
