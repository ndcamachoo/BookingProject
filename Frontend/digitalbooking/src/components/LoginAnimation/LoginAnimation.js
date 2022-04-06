import React from 'react'
import styles from './LoginAnimation.module.css'
import logo from "../../assets/logo.png";

export const LoginAnimation = (props) => {
    const {animation}= styles; 
    const {message} = props;

    return (
        <div className= { animation }>
            <img src={ logo } alt="Digital Booking Logo"/>
            <h6>{ message }</h6>
        </div>
    )
}
