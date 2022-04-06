import React from "react";
import Service2Icon from "./Service2Icon";
import styles from "./ReServices.module.css";

export const ReServices = (props) => {
  const { services } = styles;
  const { locServices } = props;

  return (
    <div className={services}>
     {
      locServices.map((icon, index) =>{
        return <Service2Icon icon={icon} key={index} color= {{color: "var(--typo-color)"}}/>
      })
     }
    </div>
  );
};

ReServices.defaultProps ={

  locServices :["Wifi",
    "kitchen",
    " parking",
    "airconditioning"],
};