import React, {useState, useEffect, useContext} from "react";
import { Button } from "../Button/Button";
import styles from "./NavButtons.module.css";
import { useLocation } from 'react-router-dom';
import { NavContext } from "../Nav/NavContext";

export const NavButtons = (props) => {
  const { registerButtons, hide } = styles;
  const {signedbar, setSignedbar}= useContext(NavContext);
  const location = useLocation();
  const [login, setlogin] = useState();
  const [register, setregister] = useState();
 
  useEffect(() => {
    if(location.pathname === '/login'){
      setlogin(true);
      setregister(false);
    }else if(location.pathname === '/register'){
      setlogin(false);
      setregister(true);
    }else{
      setlogin(false);
      setregister(false);
    }
  }, [location, login, register, setlogin, setregister])

  
  return (
    <div className= {registerButtons}>
      <Button visibility= { register } text={"Crear cuenta"} link="/register" />
      <Button visibility= { login } className= {register && {hide}} text={"Iniciar sesion"} link="/login" />
    </div>
  );
};
