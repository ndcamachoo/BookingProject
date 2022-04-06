import React from "react";
import styles from "./ProductScore.module.css";

export const ProductScore = (props) => {
  const { rate } = props;
  const { review, reviewDetail, stars } = styles;
  let rateDetail = " ";

  const rateDetails = (review) => {
    if(rate === null){
      rateDetail = "Nuevo"
    }else if (rate === 10) {
      rateDetail = "Excelente";
    } else if (rate < 10 && rate >= 8) {
      rateDetail = "Muy bueno";
    } else if (rate < 8 && rate >= 6) {
      rateDetail = "Bueno";
    } else if (rate < 6 && rate >= 4) {
      rateDetail = "Regular";
    } else if (rate < 4 && rate >= 0) {
      rateDetail = "Malo";
    } 

    return rateDetail;
  };

  rateDetails();

  return (
    <div className={review}>
      <div className={reviewDetail}>
        <h6>{rateDetail}</h6>
        <div className={stars}>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>
      <h5>{rate != null ? rate : "*"}</h5>
    </div>
  );
};
