import React, { Fragment, useMemo, useState } from 'react'
import { Button2 } from '../Button2/Button2'
import DatePicker2 from '../DatePicker2/DatePicker2'
import { DateContext } from './DateContext';
import { LocationContext } from './LocationContext';
import { Placepicker } from '../PlacePicker/Placepicker';
import "react-datepicker/dist/react-datepicker.css";
import styles from './SearchBar.module.css'

export const SearchBar = props => {

    const{search} = styles;
    const [date, setDate] = useState(false);
    const [place, setPlace] = useState(false);
    const value = useMemo(() => ({ date, setDate }), [date, setDate ]);
    const value2 = useMemo(() => ({ place, setPlace }), [place, setPlace ]);

    const handleContext= ()=>{
        localStorage.setItem('date', date);
        localStorage.setItem('place', place);
    }


    return (
        <Fragment>
            <div className={search}>
                <p>Busca ofertas en hoteles, casas y mucho más</p>
                <section>
                    <LocationContext.Provider value={value2}>
                    <Placepicker />
                    </LocationContext.Provider>
                    <DateContext.Provider value={value}>
                    <DatePicker2 dateFormat="dd/MM/yyyy" />
                    </DateContext.Provider>
                    <Button2 handleClick= {handleContext} text="Buscar" link='/product'/>
                </section>
            </div>
        </Fragment>
    )
}

