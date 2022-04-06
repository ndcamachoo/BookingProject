import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NotFound } from './NotFound/NotFound'
import useFetch from "use-http";
import { ReCard } from "../ReCard/ReCard";
import styles from "./Products.module.css";

export const Products = () => {
  const place = localStorage.getItem("place");
  const date = localStorage.getItem("date");

  let startDate = date!== "," && new Date(date.split(",")[0]).toISOString().split("T")[0];
  let endDate =  date!== "," && new Date(date.split(",")[1]).toISOString().split("T")[0];
  let city= '';
 

  const setPlaceFormat = () => {
    if (place !== "false" && place !== null) {
      let splitPlace = place.replace(/,[^,]+$/, "");
      city = splitPlace.replace(/ /g, "%20");
    } 
  };
  setPlaceFormat();


  let url2= `https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/reservations/search/${city}?startdate=${startDate}&enddate=${endDate}`;

 
  const options = {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  };


  let url = date!== ","
    ? url2
    : "https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/products";
  let searchDate = "";

  const setPlace = () => {
    if (url !== url2 && place !== "false" && place !== null) {
      url = `${url}/search?city=${city}`;
  }};
  setPlace();


  const setDate = () => {
    if (date) {
      let dates = date.split(/(\s+)/);
      searchDate = `${dates[4]} de ${dates[2]} del ${dates[6]} hasta el ${dates[22]} de ${dates[20]} del ${dates[24]}  `;
    }
  };
  setDate();

  const { loading, data = [] } = useFetch(url, options, []);
  console.log(data);
  const [products, setProducts] = useState(4);
  const {
    productsList,
    recommendation,
    recommendationCards,
    recommendationtitle,
    recommendationContainer,
    loadMore,
    title,
    placeInfo,
    titleContainer
  } = styles;
  let history = useHistory();

  const handleClick = () => {
    setProducts((prevProducts) => prevProducts + 4);
  };

 
  return (
    <div className={productsList}>
      <section className={title}>
        <div className={titleContainer}>
          <h4 className={placeInfo}>
            {" "}
            {place !== "false"
              ? `Resultados de tu búsqueda en ${place}`
              : `Sugerencias para tus próximas vacaciones`}
          </h4>{" "}
          <i className="fas fa-arrow-left" onClick={() => history.goBack()}></i>
        </div>
      </section>
      <div className={recommendationContainer}>
        <section className={recommendation}>
          <h4 className={recommendationtitle}>
            {date === ","
              ? `Productos disponibles`
              : `Productos disponibles para el día ${searchDate}`}
          </h4>
          <div className={recommendationCards}>
            {loading ? <p>Cargando Recomendaciones...</p> :
            data.length>=1 ? data.slice(0, products).map((product, index) => (
              <ReCard
                key={index}
                type={product.productCategory.name}
                title={product.productName}
                img={product.photoGallery[0]}
                alt={"Isla Fanta sia"}
                text={product.productDescription}
                loc={product.location}
                rate={product.review}
                id={product.id}
                services={product.services}
                latlong={product.coordinates}
              /> 
            )) : <NotFound />}
          </div>
          {data.lenght > 6 && (
            <button className={loadMore} onClick={handleClick}>
              Ver Mas
            </button>
          )}
        </section>
      </div>
      
    </div>
  );
};