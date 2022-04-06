import React, { Fragment, useState, useEffect } from "react";
import styles from "./ReCard.module.css";
import { ReviewCount } from "../ReviewCount/ReviewCount";
import { ReTitle } from "../ReTitle/ReTitle";
import { ReServices } from "../ReServices/ReServices";
import { Link } from "react-router-dom";
import { Maps } from "../Maps/Maps";

export const ReCard = (props) => {
  const { type, title, img, alt, text, rate, id, services, latlong } = props;
  const link = `/product/${id}`;
  const {
    recommendationCards,
    location,
    reCardTitle,
    container,
    description,
    recommendationMap,
    mapHeader,
  } = styles;
  const [mapVisible, setMapVisible] = useState(false);
  const [lat, setLat] = useState("-34.70");
  const [long, setLong] = useState("-58.37"); 

  const handleClick = () => {
    setMapVisible(false);
  };

  const showMap = () => {
    setMapVisible(true);
  };

  return (
    <Fragment>
      {!mapVisible && (
        <article className={recommendationCards}>
          <img src={img} alt={alt} />
          <div className={container}>
            <div className={reCardTitle}>
              <ReTitle type={type} title={title} />
              <ReviewCount rate={rate} />
            </div>
            <div className={location}>
              <p>A 940 mts del centro</p>
              <h6 onClick={ showMap }>MOSTRAR EN EL MAPA</h6>
            </div>
            <ReServices locServices={services} />
            <div className={description}>
              <p>{text}</p>
            </div>
            <Link to={link}>
              {" "}
              <button>Ver más</button>
            </Link>
          </div>
        </article>
      )}
      {mapVisible && (
        <article className={recommendationMap}>
          <div className={mapHeader}>
            <h6>{title}</h6>
            <span>{location}</span>
            <p onClick={handleClick}>X</p>
          </div>
          <Maps
            lat={latlong[0]}
            long={latlong[1]}
            name={title}
            city={location}
            width="92%"
            height="100%"
            margin="4%"
          />
        </article>
      )}
    </Fragment>
  );
};


