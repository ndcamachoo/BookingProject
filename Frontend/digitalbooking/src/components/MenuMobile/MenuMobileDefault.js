import React, { useContext, useState, useEffect } from "react";
import styles from "./MenuMobileDefault.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { MobileVisibilty } from "../Nav/MobileVisibility";

export const MenuMobileDefault = () => {
  const { header, logout, buttons, hide, button } = styles;
  const [login, setlogin] = useState();
  const [register, setregister] = useState();
  const location = useLocation();
  const { visibility, setVisibility } = useContext(MobileVisibilty);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (location.pathname === "/login") {
      setlogin(true);
      setregister(false);
    } else if (location.pathname === "/register") {
      setlogin(false);
      setregister(true);
    } else {
      setlogin(false);
      setregister(false);
    }
  }, [location, login, register, setlogin, setregister]);

  const handleClick = () => {
    setVisibility(false);
  };

  return (
    <div>
      <section className={header}>
        <button className={logout} onClick={handleClick}>
          X
        </button>
        <h4>MENÚ</h4>
      </section>
      <section className={buttons}>
        <Link to="/register" className={register ? hide : button}>
          <h5>Crear cuenta</h5>
        </Link>
        <Link to="/login" className={login ? hide : button}>
          <h5>Iniciar sesión</h5>
        </Link>
      </section>
    </div>
  );
};
