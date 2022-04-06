import React from 'react'
import { useHistory } from "react-router-dom" 
import styles from "./ProductBanner.module.css"

export const ProductBanner = (props) => {
    let history = useHistory();
    const {title, subtitle}= props;
    const { header, headerContainer, titleContainer } = styles;
    return (
        <section className={header}>
        <div className={headerContainer}>
          <div className={titleContainer}>
            <h5>{ title }</h5>
            <h3>{ subtitle }</h3>
          </div>
          <i className="fas fa-arrow-left" onClick={() => history.goBack()}></i>
        </div>
      </section>
    )
}

