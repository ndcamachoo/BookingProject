import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext/UserContext";
import { ReCard } from "../ReCard/ReCard";
import styles from "./userFavorites.module.css";
import useFetch from "use-http";
import favProducts from "./favProducts";
import userfavs from "./userfavs";
import { NotFound } from "../Products/NotFound/NotFound";

export const UserFavorites = () => {
  const [data, setData]= useState();
  const [dataFiltered, setDataFiltered] = useState();
  const [filtrable, setFiltrable] = useState();
  const [liked, setliked]= useState([]);
  const [prodCard, setprodCard] = useState([]);
  const { userFavorites } = styles;
  const [data2, setdata2] = useState([]);
 

  useEffect(() => {
    favProducts.then(products => {
      setdata2(products);
    })
  
    userfavs.then(products=>{
      setData(products)
    })  
  }, [data2])
  
  useEffect(() => {
    let filtered;
    if(data != undefined){
    filtered = data.filter(function(element){
      return element.like == true;
    });
    setDataFiltered(filtered)
  }
  }, [data2, data])

  useEffect(() => {
    let userfavs=[];
    if(dataFiltered != undefined && data != undefined){
      dataFiltered.forEach(element => {
       userfavs.push(element.productId)
    });
    setliked(userfavs);
  };
  }, [dataFiltered, data])

  useEffect(() => {
    let filteredProd= []
    if(liked != [] && data2 != undefined){
      filteredProd= data2.filter(item => liked.includes(item.id))
      setprodCard(filteredProd)
      setFiltrable(true)
  }}, [liked])
 
  return (
    <div className={userFavorites}>
      {!filtrable && <h3>Cargando Favoritos...</h3>}
      {filtrable && prodCard[0]? 
        prodCard.map((product, index) => (
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
        )): <h5>Todavia no tenes favoritos.</h5>}
    </div>
  );
};
