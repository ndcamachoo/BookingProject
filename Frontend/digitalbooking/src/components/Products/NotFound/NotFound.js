import React, { Fragment } from 'react'
import styles from "./NotFound.module.css"
import  NotFoundAnimation  from './NotFoundAnimation'
import { Button } from '../../Button/Button'

export const NotFound = () => {
    const {notFound, info, animation, anim, text}= styles;
    return (
        <div className = { notFound }>
            <section className= { animation }>
                <NotFoundAnimation className= { anim } />
            </section>
            <section className= { info }>
                <h2>Sin resultados</h2>
                <div className= { text }>
                <p>tus VACA...ciones han sido abducidas</p> 
                <p>No te desanimes, tenemos miles de locaciones para tus próximas vacaciones.</p>
                </div>
                <Button text="Volver al home"/>
            </section>    
        </div>
    )
}

