import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import validate from "./validate";
import { LoginAnimation } from "../LoginAnimation/LoginAnimation";
import { useForm } from "../../hooks/useForm";
import checkSubmitable from "./checkSubmitable"
import styles from "./SignUp.module.css";

export const SignUp = (props) => {
  const { signup, item, fullname, input, button, create, error, errorm } = styles;
  const url = 'https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/users/save';
  const [success,  setsuccess] = useState(false);
  const [errors, seterrors] = useState([]);
  const [submitable, setsubmitable] = useState(false);
  const [formvalues, handleInputChange] = useForm({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    repassword: "",
    userRole: "USER",
  });
  const { nombre, apellido, email, password, repassword } = formvalues;
  const [showPasswordA, setShowPasswordA] = useState(false);
  const [showPasswordB, setShowPasswordB] = useState(false);
  const [message, setmessage]= useState();
  let history = useHistory();

  const togglePasswordA = () => {
    setShowPasswordA(showPasswordA ? false : true);
  };

  const togglePasswordB = () => {
    setShowPasswordB(showPasswordB ? false : true);
  };

  useEffect(() => {
    setsubmitable(checkSubmitable(formvalues))
   
  }, [formvalues])

  const handleSubmit = (e) => {
    e.preventDefault();
    setmessage();
    seterrors(validate(formvalues));
    if (submitable) {
      fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formvalues),
      })
      .then(response => {
        if (!response.ok) throw Error(response.status);
        return response;
      })
      .then(response => {
        setmessage("Usuario registrado exitosamente. Redirigiendo al home");
        setsuccess("true");
        setTimeout(() => {
           history.push("/");
        }, 2000);
      })
      .catch(error => { 
        error.message == "409"? setmessage("Email registrado previamente."):
        setmessage("Error al realizar el registro.");
        setsuccess(false) 
      }); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={signup}>
        <h2>Crear cuenta</h2>
        <section className={fullname}>
          <div className={item}>
            <p>Nombre</p>
            <input
              name="nombre"
              className={input}
              type="text"
              value={nombre}
              onChange={handleInputChange}
            />
            {errors.nombre && <h6 className={error}>{errors.nombre}</h6>}
          </div>
          <div className={item}>
            <p>Apellido</p>
            <input
              name="apellido"
              className={input}
              type="text"
              value={apellido}
              onChange={handleInputChange}
            />
            {errors.apellido && <h6 className={error}>{errors.apellido}</h6>}
          </div>
        </section>
        <div className={item}>
          <p>Correo electrónico</p>
          <input
            name="email"
            className={input}
            type="text"
            value={email}
            onChange={handleInputChange}
          />
          {errors.email && <h6 className={error}>{errors.email}</h6>}
        </div>
        <div className={item}>
          <p>Contraseña</p>
          <input
            name="password"
            className={input}
            type={showPasswordA ? "text" : "password"}
            value={password}
            onChange={handleInputChange}
          />
          <i
            className="fas fa-eye-slash"
            onMouseDown={togglePasswordA}
            onMouseUp={togglePasswordA}
          ></i>
          {errors.password && <h6 className={error}>{errors.password}</h6>}
        </div>
        <div className={item}>
          <p>Confirmar contraseña</p>
          <input
            name="repassword"
            className={input}
            type={showPasswordB ? "text" : "password"}
            value={repassword}
            onChange={handleInputChange}
          />
          <i
            className="fas fa-eye-slash"
            onMouseDown={togglePasswordB}
            onMouseUp={togglePasswordB}
          ></i>
          {errors.repassword && <h6 className={error}>{errors.repassword}</h6>}
        </div>
        { success ? <LoginAnimation message= { message }/>: <h6 className= {errorm}>{message}</h6>}
        <button name="submit" className={button}>Registrate</button>
        <div className={create}>
          <p>¿Ya tienes cuenta?</p>
          <Link to="/login" style={{textDecoration: 'none'}}><h5>Inicia sesión</h5></Link>
        </div>
      </div>
    </form>
  );
};