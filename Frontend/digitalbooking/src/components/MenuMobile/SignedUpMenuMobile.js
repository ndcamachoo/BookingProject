import React, { useContext, useState, useEffect } from "react";
import styles from "./SignedUpMenuMobile.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { MobileVisibilty } from "../Nav/MobileVisibility";

export const SignedUpMenuMobile = () => {
  const { header, logout, buttons, hide, button, avatar,avatarDiv, buttonLogout} = styles;
  const [login, setlogin] = useState();
  const [register, setregister] = useState();
  const { visibility, setVisibility } = useContext(MobileVisibilty);
  const { setuser, user } = useContext(UserContext);

  let name = JSON.parse(user).name;
  let auth = JSON.parse(user).authorities[0];
  const firstName = name.split(" ").slice(0, -1).join(" ");
  const lastName = name.split(" ").slice(-1).join(" ");
  const initials =
    firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

  const handleClick = () => {
    setVisibility(false);
  };
  
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    setuser(null);
  };

  return (
    <div>
      <section className={header}>
        <button className={logout} onClick={handleClick}>
          X
        </button>
        <div className= {avatarDiv}>
        <h4 className={avatar}>{initials}</h4>
        <h4>Hola, {name}</h4>
        </div>
      </section>
      <section className={buttons}>
        <div>
        {auth !== "ADMIN" ? <Link to="/preferences" className={register ? hide : button}>
          <h5>Reservas</h5>
        </Link> : <Link to="/administration" className={register ? hide : button}>
          <h5>Administración</h5>
        </Link>}
        </div>
        <Link to="/logout" className={login ? hide : buttonLogout}  onClick={handleLogout}>
          <h5>Cerrar sesión</h5>
        </Link>
      </section>
    </div>
  );
};
