import React from "react";
import { useFetch } from "use-http";
import styles from "./CategoryCard.module.css";

export const CategoryCard = (props) => {
  
  const options = {headers:{
    "X-Requested-With": "XMLHttpRequest"
  }};
  const { categoryCards } = styles;
  const { image, title, /*description,*/ alt } = props;
  const { data = [] } = useFetch("https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/category/count/Hoteles" , options, []);

  return (
    <article className={categoryCards}>
      <img src={image} alt={alt} />
      <h5>{title}</h5>
      <p>{data} {title}</p>
    </article>
  );
};
