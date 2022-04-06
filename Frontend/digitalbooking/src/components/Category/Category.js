import React from "react";
import { ProductsByCategory } from "../ProductsByCategory/ProductsByCategory";
import { useLocation, useHistory } from 'react-router-dom';
import useFetch from "use-http";
import styles from "./Category.module.css";

export const Category = () => {
  const location = useLocation();
  const path= location.pathname.split("/");
  const id = path[2];
  const options = { headers:{
    "X-Requested-With": "XMLHttpRequest"
  }};
  const url = `https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/category/${path[2]}`;
  const { loading, data = [] } = useFetch(url, options, []);
  const { category, title, cat, titleContainer } = styles;
  let history = useHistory();
  
  
  return (
    <div className={cat}>
        <section className= {title}>
          <div className={titleContainer}>
            <h4 className= {category}>{data.name}</h4>
            <i className="fas fa-arrow-left" onClick={() => history.goBack()}></i>
          </div>
        </section>
          {loading && <p>Cargando Recomendaciones...</p>}  
          <ProductsByCategory category={id} name={data.name}/>
    </div>
  );
};