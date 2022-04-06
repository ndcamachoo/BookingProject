import React, { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { useHistory } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { LoginAnimation } from "../LoginAnimation/LoginAnimation";
import { useSecretCode } from "./EasterEgg";
import parseJwt from "./parseJwt"
import styles from "./Login.module.css";

export const UserLogin = (props) => {
  const location = useLocation();
  const path= location.pathname.split("/");
  const id = path[2];
  const { setuser } = useContext(UserContext);
  const [ message, setmessage ]= useState();
  const [success,  setsuccess] = useState();
  const { login, item, input, create, button, errorm, resLogin } = styles;
  const url = "https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/users/authenticate";
  const [formvalues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formvalues;
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(showPassword ? false : true);
  };
  let history = useHistory();
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA"
  ];
  const code = useSecretCode(konamiCode);
  let EasterEgg = code ? ( <img src="https://assets-g4-booking.s3.amazonaws.com/7247_cosme.gif" alt="cosme"/>) : (<></>);
  const handleSubmit = (e) => {
    e.preventDefault();
    setmessage();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formvalues),
    })
    .then((response) => { 
      if (!response.ok) throw Error(response.status);
      return response.text()})
    .then((data) =>{
        localStorage.setItem("bearer", data);
        localStorage.setItem("data", JSON.stringify(parseJwt(data)));
        setsuccess("true");
        setmessage("Login exitoso. Redirigiendo.");
        setTimeout(() => {
           setuser(JSON.stringify(parseJwt(data)))
           history.goBack();
        }, 2000);
      })
      .catch((error) => {
        error.message == "401"? setmessage("Credenciales inválidas."):setmessage("Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde.") ;
      setsuccess(false) 
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      { success && <LoginAnimation message= { message }/>}
      <div className={login}>
        {id=== "resFailed" && <div className= {resLogin}><i class="fas fa-exclamation-circle"></i><p>Para realizar una reserva necesitas estar logueado</p> </div>}
        <h2>Iniciar sesión</h2>
        <div className={item}>
          <p>Correo electrónico</p>
          <input
            name="email"
            className={input}
            type="text"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className={item}>
          <p>Contraseña</p>
          <input
            name="password"
            className={input}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleInputChange}
          />
          <i
            className="fas fa-eye-slash"
            onMouseDown={togglePassword}
            onMouseUp={togglePassword}
          ></i>
        </div>
        <button name='submit' className={button}>Ingresar</button>
        <div className={create}>
          <p>¿Aun no tienes cuenta?</p>
          <Link to="/register" style={{textDecoration: 'none'}}><h5>Registrate</h5></Link>
        </div>
        {!success && <h6 className= {errorm}>{message}</h6>}
        {EasterEgg}
      </div>
    </form>
  );
};
