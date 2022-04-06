import React from "react";
import { ReCard } from "../ReCard/ReCard";
import useFetch from "use-http";
import styles from "./ProductsByCategory.module.css";

export const ProductsByCategory = (props) => {
  const options = {headers:{
    "X-Requested-With": "XMLHttpRequest"
  }};
  const {category, name} = props; 
  const url = "https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/products";
  const { loading, data = [] } = useFetch(url, options, []);
  const { recommendation, recommendationCards, recommendationtitle, recommendationContainer } = styles;

  const filteredData = data.filter(location => location.productCategory.id == category)

  return (
    <div className={recommendationContainer}>
      <section className={recommendation}>
        <h4 className={recommendationtitle}>Recomendaciones de {name}</h4>
        <div className={recommendationCards}>
          {loading && <p>Cargando Locaciones...</p>}
          {filteredData.slice(0,5).map((product, index) => (
            <ReCard
              key={index}
              type={product.productCategory.name}
              title={product.productName}
              img={product.photoGallery[0]}
              alt={product.productDescription}
              text={product.productDescription}
              loc={product.location}
              rate={product.review}
              id={product.id}
              services= {product.services}
              latlong={product.coordinates}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
