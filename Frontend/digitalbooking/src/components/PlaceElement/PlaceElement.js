import React from 'react'
import styles from './PlaceElement.module.css'

export const PlaceElement = props => {

    const {elemento, locationtext, matching} = styles;
    const {city, search} = props;
    const location = city.split(",");
    const match = location[0].match(new RegExp(`(${search})`, 'gi'));
    const textReplace = location[0].replace(new RegExp(`(${search})`, 'gi'), '*');
 
    return (
        <li className = {elemento}>
            <i className="fas fa-map-marker-alt"></i>
            <div className = {locationtext}>
            <h5>{textReplace.split('').map((element=>{
                if(element === '*'){
                    return <strong className={matching}>{match[0]}</strong>
                } else{
                    return element
                } 
            }))}</h5>
            <h6>{location[1]},{location[2]}</h6>
            <hr/>
            </div>    
        </li>
    )
}