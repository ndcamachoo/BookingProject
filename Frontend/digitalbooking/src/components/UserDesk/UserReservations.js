import React, {useState, useEffect} from 'react'
import { ReServices } from '../ReServices/ReServices';
import { Link } from "react-router-dom";
import { CancelReservation } from './CancelReservation/CancelReservation'
import { NotFound } from '../Products/NotFound/NotFound';
import diffDates from "../../functions/diffDates"
import styles from './UserReservations.module.css'
import userReserv from './userReserv';

export const UserReservations = () => {

    const {userReservations, cardContainer, container, buttonsBooking} = styles;
    const [cards, setCards] = useState([]);
    const [loading, setLoading]= useState(true);
    const user= JSON.parse(localStorage.getItem("data")).name;
    
    /*let lStyles = {
      width: '50%',
      padding: '0px 0px 0px 0px',
      margin: '0px 0px 0px 0px',
      backgroundColor: 'red'
    };*/
    
    userReserv.then(products => {
      setCards(products);
      setLoading(false);
    })


    
    return (
        <div className= { userReservations }> 
         {loading && <h5>Cargando reservas</h5>}   
         {!loading && cards.length == 0 ? <NotFound/>: <h5>{`Reservas de ${user}`}</h5>}
         {cards && cards.map((booking)=>(
           <div className={container}>
             <div className={cardContainer}>
              <h5>{`Fecha: desde el ${booking.reservationStartDate} hasta el ${booking.reservationEndDate}`}</h5>
              <hr/> 
              <p>{booking.product.productCategory.description}</p>
              <h4>{booking.product.productName}</h4>
              <img src={booking.product.photoGallery[0]} alt="Fotografia del producto"/>
              <ReServices locServices={booking.product.services} />
              <p>{booking.product.productDescription}</p>
              <hr/>
              <span>{`$${booking.product.pricePerNight} / Noche`}</span>
              <span>{`$${booking.product.pricePerNight * (diffDates(new Date(booking.reservationStartDate), new Date(booking.reservationEndDate)))} / Total por ${diffDates(new Date(booking.reservationStartDate), new Date(booking.reservationEndDate))} Noches`}</span>
              {/*<p></p>*/}
              <div className={ buttonsBooking }>
                <Link to={`/product/${booking.product.id}`}>{" "}<button>Ver más</button></Link>
                <CancelReservation id={booking.id} />
              </div>
             </div>
           </div> 
         ))}
        </div>
    )
}
