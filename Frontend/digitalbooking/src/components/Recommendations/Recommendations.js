import React, {useState} from "react";
import { ReCard } from "../ReCard/ReCard";
import useFetch from "use-http";
import styles from "./Recommendations.module.css";

export const Recommendations = () => {
  
  const options = { headers:{
    "X-Requested-With": "XMLHttpRequest"
  } };
  const url = "https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/products";
  const { loading, data = [] } = useFetch(url, options, []);
  const { recommendation, recommendationCards, recommendationtitle, recommendationContainer, loadMore } = styles;
  const [products, setProducts] = useState(4);

  const handleClick = () => {
    
    setProducts(prevProducts => prevProducts + 4)
    
  }

  return (
    <div>
      <section className={recommendation}>
        <div className={recommendationContainer}>
          <h4 className={recommendationtitle}>Recomendaciones</h4>
          <div className={recommendationCards}>
            {loading && <p>Cargando Recomendaciones...</p>}
            {data.slice(0,products).map((product, index) => (
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
                services={product.services}
                latlong={product.coordinates}
              />
            ))}
          </div>
          {data[products] && <button className={loadMore} onClick={handleClick}>Ver más</button>}    
        </div>
      </section>
    </div>
  );
};
