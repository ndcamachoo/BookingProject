import React from 'react'
import { Link } from "react-router-dom";
import checked from '../../assets/checked.png'
import styles from  './ResSuccess.module.css'

export const ResSuccess = (props) => {
    const {confirmation, success, title, info, button} = styles;
    const { message, text, bMessage } = props;
    return (
        <div className= { confirmation }>
            <section className= { success }>
                <img src= { checked } alt='Ícono de reserva realizada.'/>
                <h3 className= { title }>{ message }</h3>
                <h5 className= { info }>{text}</h5>
                <Link to= '/'><button className={ button }>{ bMessage }</button></Link>
            </section>
        </div>
    )
}
