import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { UserContext } from "../UserContext/UserContext";
import styles from "./BookingCard.module.css";

export const BookingCard = (props) => {
    const { user } = useContext(UserContext);
    const { path }= props;
    const { bookingCards, resButton } = styles;
    let component = user ? <Link to={`../reservation/${path}`} className={resButton}><button>Iniciar reserva</button></Link> : <Link to={`../login/resFailed`} className={resButton}><button>Iniciar reserva</button></Link> ;
    return (
      <article className={ bookingCards }>
          <p>Agregá tus fechas de viaje para obtener precios exactos</p>
         {component}
      </article>
    );
  };