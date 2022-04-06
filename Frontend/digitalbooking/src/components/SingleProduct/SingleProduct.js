import React, { Fragment, useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { ProductScore } from "../ProductScore/ProductScore";
import { ProductBanner} from "../ProductBanner/ProductBanner"
import useFetch from "use-http";
import { GridBanner } from "../GridBanner/GridBanner";
import { NotFound } from '../NotFound/NotFound'
import DatePickerProduct from "../DatePickerProduct/DatePickerProduct";
import { BookingCard } from "../BookingCard/BookingCard";
import styles from "./SingleProduct.module.css";
import { Maps } from "../Maps/Maps";
import { ProductService } from "../ProductService/ProductService";
import { GalleryContext } from "../ProductService/GalleryContext";
import { Policies } from "../Policies/Policies"
import ImagesCarousel from "../ImagesCarousel/ImagesCarousel";

export const SingleProduct = () => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const id = path[2];
  const options = {headers:{
    "X-Requested-With": "XMLHttpRequest"
  }};
  const url = `https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/products/${id}`;
  const { loading, data = [] } = useFetch(url, options, []);
  const {product,info,locDetail,description,dates,datesBlock,map, mapInfo, calendar, servicios, infoContainer, galleryContainer,galleryEventContainer} = styles;
  
  const [gallery, setGallery] = useState(false)
  const value = useMemo(() => ({ gallery, setGallery }), [gallery, setGallery ]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);


  return !loading ? (
    <Fragment class= "singleProd">
      {data.productName &&
      <div className={product}>
        <ProductBanner title={ data.productCategory.name } subtitle={data.productName} />
        <section className={info}>
          <div className={infoContainer}>
            <div>
              <div className={locDetail}>
                <i className="fas fa-map-marker-alt"></i>
                <h4>{data.city.name}</h4>
              </div>
              <p> A 950 metros del centro</p>
            </div>
            <ProductScore rate={data.review} />
          </div>
        </section>
        <GalleryContext.Provider value= { value } >
        {gallery && <div className={galleryEventContainer}><ImagesCarousel imagesGallery={data.photoGallery}/></div>}
        <GridBanner
          ph1={data.photoGallery[0]}
          ph2={data.photoGallery[1]}
          ph3={data.photoGallery[2]}
          ph4={data.photoGallery[3]}
          ph5={data.photoGallery[4]}
          ph6={data.photoGallery[5]}
          productId ={id}
        />
        </GalleryContext.Provider>
        <div className={galleryContainer}>
          <ImagesCarousel imagesGallery={data.photoGallery}/>
        </div>
        <div className={description}>
          <h4>Alojate en {data.location}</h4>
          <p>{data.productDescription}</p>
        </div>
        <section className={servicios}>
          <h4>¿Qué ofrece este lugar?</h4>
          <hr/>
          <ProductService productServices={data.services}/>
        </section>
        <section className={dates}>
          <div className={datesBlock}>
            <h4>Fechas Disponibles</h4>
            <div className={calendar}>
              <DatePickerProduct />
              <BookingCard path= {data.id}/>
            </div>
          </div>
        </section>
        <section className={map}>
          <div className={mapInfo}>
            <h4>¿Dónde vas a estar?</h4>
            <hr/>
            <h5> {data.city.name} </h5>
          </div>
          <Maps
            lat={data.coordinates[0]}
            long={data.coordinates[1]}
            name={data.productName}
            city={data.location}
            width= "94%"
            height="80vh"
            margin= "3%"
          />
        </section>
        <Policies hrules={data.houseRules} health= {data.healthSafety} cancel ={data.cancellationPolicy}/>
      </div>} 
      {!data.productName && <NotFound/>}
    </Fragment>
  ) : (
    <div>Loading...</div>
  );
};
