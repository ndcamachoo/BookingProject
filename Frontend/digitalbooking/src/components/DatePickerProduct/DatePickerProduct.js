import { useState, useEffect, useMemo } from "react";
import DatePicker from "react-datepicker"; 
import { useLocation } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerProduct.css";
import useMediaQuery from "../../hooks/useMediaQuery";

const DatePickerProduct = () => {

    const [startDate, setStartDate] = useState(null);
    const isMobile = useMediaQuery('(max-width: 704px)');
    const location = useLocation();
    const path = location.pathname.split("/");
    const id = path[2];
    const {options, setoptions}= useState({ headers:{
        "X-Requested-With": "XMLHttpRequest"
    }});
    const value = useMemo(() => ({ options, setoptions }), [options, setoptions]);
    const url = `https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/reservations/product/dates/${id}`;
    const [ fetchDays, setFetchDays] = useState([]);

    useEffect(() => {
        fetch(url, value)
        .then((response) => response.json()) 
        .then((data) =>  setFetchDays(data))
        .catch((e) => console.error(e));

    }, [])

    const addDays = (date, days) => {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      }
    
    const datesExcluded = fetchDays.map(date => { 
        const day = new Date(date);
        day.setDate(day.getDate() + 1);
        return day;
    });
  
    return(
        <DatePicker
            selectsRange={false}
            selected={startDate}
            onChange = {(date) => setStartDate(date)}
            minDate = {new Date()}
            maxDate={addDays (new Date(), 364)}
            isClearable={false}
            className = "datepicker"
            monthsShown= {2}
            shouldCloseOnSelect={false}
            monthsShown= {isMobile ? 1 : 2}
            calendarStartDay={1}
            inline={true}
            excludeDates={datesExcluded}

    />
    );



}

export default DatePickerProduct;