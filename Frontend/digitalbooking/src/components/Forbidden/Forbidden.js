import React from 'react'
import { Link } from "react-router-dom";
import checked from '../../assets/forbidden.png'
import styles from  './Forbidden.module.css'

export const Forbidden = (props) => {
    const {confirmation, success, title, info, button} = styles;
    const {mes1, mes2, link, btn} = props;
    return (
        <div className= { confirmation }>
            <section className= { success }>
                <img src= { checked } alt='Ícono de reserva realizada.'/>
                <h3 className= { title }>{mes1}</h3>
                <h5 className= { info }>{mes2}</h5>
                <Link to= {link}><button className={ button }>{btn}</button></Link>
            </section>
        </div>
    )
}

Forbidden.defaultProps = {
    mes1: "Login necesario",
    mes2: "Para acceder a esta página se requiere iniciar sesión.",
    link: '/login',
    btn: "Iniciar sesión"
};