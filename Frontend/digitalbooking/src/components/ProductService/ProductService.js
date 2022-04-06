import React from "react";
import Service2Icon from "../ReServices/Service2Icon"
import styles from "./ProductService.module.css";

export const ProductService = (props) => {
  const { services, container } = styles;
  const { productServices } = props;
console.log(props)
  return (
    <div className = {container}>
      {
        productServices.map((icon, index) =>{
          return ( 
            <div className={services} key={index}>
              <Service2Icon icon={icon} key={index} color= {{color: "var(--principal-color)"}} />
              <p>{icon[0].toUpperCase() + icon.substring(1)}</p>
            </div>
          )
        })
      }
    </div>
  );
};

ProductService.defaultProps ={

  productServices :["Wifi",
    "kitchen",
    " parking",
    "airconditioning"],
};