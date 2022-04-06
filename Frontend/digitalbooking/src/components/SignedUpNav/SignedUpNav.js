import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { Link } from "react-router-dom";
import styles from "./SignedUpNav.module.css";

export const SignedUpNav = (props) => {
  const { user, setuser } = useContext(UserContext);
  const [setmessage] = useState();
  const [setsuccess] = useState(false);
  let name = user && JSON.parse(user).name;
  let auth = user && JSON.parse(user).authorities[0];
  const firstName = user && name.split(" ").slice(0, -1).join(" ");
  const lastName = user && name.split(" ").slice(-1).join(" ");
  const initials =
    user && firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
  const { signedBar, section, avatar, names, logout } = styles;
  const [bearer, setBearer] = useState();
  const url =
    "https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/users/logout";
  let history = useHistory();

  useEffect(() => {
    if(user){
      setBearer(`${JSON.parse(localStorage.getItem("bearer")).jwt}`);
    }
  }, [user])

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem('data');
    localStorage.removeItem('bearer');  
    setuser(null);
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: bearer,
        Cookie: "JSESSIONID=373D1B63E0830A208413CF00303B0070",
        "X-Requested-With": "XMLHttpRequest",
      },
      redirect: "follow",
    })
      .then((response) => {
        if (!response.ok) throw Error(response.status);
        return response;
      })
      .then((response) => {
          history.push("/");
      })
      .catch((error) => {
        setmessage("Error al intentar cerrar la sesión");
        setsuccess(false);
      });
  };

 
  return (
    <div className= { signedBar }>
     {
       auth === "ADMIN"? <Link to="/administration"><i className="fas fa-user-cog"></i></Link> : <a href="/preferences" style={{ textDecoration: "none" }}><i className="fas fa-user"></i></a>
     }
      <div className={section}>
        <h4 className={avatar}>{initials}</h4>
        <div>
          <p>Hola,</p>
          <p className={names}>{name}</p>
        </div>
          <h5 onClick={handleClick} className={logout}>
            X
          </h5>
      </div>
    </div>
  );
};
