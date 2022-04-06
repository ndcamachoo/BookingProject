import React from "react";
import styles from "./button2.module.css";
import { Link } from "react-router-dom"

export const Button2 = (props) => {
  const { text, link, handleClick } = props;
  const { button2 } = styles;
  
  return (
    <Link to= {link || '/'} style={{textDecoration: 'none'}} onClick={ handleClick|| ''}> <button className={button2}>
    {text}</button></Link> 
  );
};
