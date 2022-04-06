import React, { Fragment } from "react";
import styles from "./Footer.module.css";

export const Footer = (props) => {
  const { footer, social } = styles;

  return (
    <Fragment>
      <footer className={footer}>
        <h6>©2021 Digital Booking</h6>
        <div className={social}>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </footer>
    </Fragment>
  );
};
