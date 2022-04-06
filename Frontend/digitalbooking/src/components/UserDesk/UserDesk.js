import React, {  useContext, useState, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from "../UserContext/UserContext";
import { UserReservations } from './UserReservations';
import { ProductBanner } from '../ProductBanner/ProductBanner';
import styles from './UserDesk.module.css'
import { Forbidden } from '../Forbidden/Forbidden';
import { UserFavorites } from './UserFavorites';
 

export const UserDesk = () => {
    const {user, setuser } = useContext(UserContext);
    const userName=  user && JSON.parse(localStorage.getItem("data")).name;
    const [udesk, setUdesk]= useState();
    const value = useMemo(
        () => ({ udesk, setUdesk }),
        [udesk, setUdesk]
    );
    const { userDesk, menu, desk } = styles; 
    const [reservation, setreservation]= useState(false);
    const [fav, setFav] = useState(false);
    let history = useHistory();  
   
    const handleClick = (e) => {
        e.preventDefault();
        setuser(null);
        localStorage.clear();
        history.push("/");
    };

    const handleReservation = (e)=> {
        e.preventDefault();
        setreservation(true);
        setFav(false);
        setUdesk("reservation")
    }

    const handleFavorites = (e)=> {
        e.preventDefault();
        setFav(true);
        setreservation(false);
        setUdesk("favorites")
    }

    let linkStyles = {
        backgroundColor: 'white',
        borderRadius: '5px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
        color: 'black',
        textDecoration: 'none',
        textAlign: 'center',
        width: '28%',
        padding: '10px 0px 10px 0px',
        margin: '3px 0px 4px 0px',
      };



    return (
        <div className= { userDesk }>
            <ProductBanner title="Perfil de" subtitle={userName} /> 
            <div className={ menu }>
                <button onClick={ handleReservation }> <i className="fas fa-calendar-check"></i> Mis reservas</button>
                <button onClick= { handleFavorites }><i className="fas fa-heart"></i>Favoritos</button>
                <button onClick={handleClick} style={linkStyles}><h5> <i className="fas fa-sign-out-alt"></i> Cerrar sesión</h5></button>
            </div>
            <div className={ desk }>
                {reservation && <UserReservations />}
                {fav && <UserFavorites />}
            </div>
        </div>
    )
}
