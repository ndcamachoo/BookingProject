import React from "react";
import styles from "./Button.module.css"
import { Link } from "react-router-dom"


export const Button = (props) => {
  const { button, hide } = styles;
  const {text, link, handleClick} = props;
  let { visibility }= props;

  return (
    <Link to= {link || '/'} style={{textDecoration: 'none'}} onClick={ handleClick|| ''}> <button className={ visibility? hide: button}>
    {text}</button></Link> 
  );
};

