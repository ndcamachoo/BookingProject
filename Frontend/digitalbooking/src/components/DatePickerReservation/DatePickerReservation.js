import { useState, useContext, useEffect, useMemo} from "react";
import { ResDateContext } from "../Reservation/ResDateContext";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import useMediaQuery from "../../hooks/useMediaQuery";

const DatePickerReservation = () => {
    const {setrdate }= useContext(ResDateContext);
    const isMobile = useMediaQuery('(max-width: 636px)');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const location = useLocation();
    const path = location.pathname.split("/");
    const id = path[2];
    const {options, setoptions}= useState({ headers:{
        "X-Requested-With": "XMLHttpRequest"
    }});
    const value = useMemo(() => ({ options, setoptions }), [options, setoptions]);
    const url = `https://cors-everywhere-me.herokuapp.com/g4bookingapp-env-2.eba-4mbmxg4f.us-east-1.elasticbeanstalk.com/reservations/product/dates/${id}`;
    const [ fetchDays, setFetchDays] = useState([]);
    

    const onChange = (dates) => {
    let startDate= new Date(dates[0]).toISOString().split("T")[0].split("-").reverse().join("/");
    let endDate = dates[1]!= null ? new Date(dates[1]).toISOString().split("T")[0].split("-").reverse().join("/")
    :"___ /___ /___";  
    setrdate([startDate, endDate]);
    
    const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

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
    };

    const datesExcluded = fetchDays.map(date => { 
        const day = new Date(date);
        day.setDate(day.getDate() + 1);
        return day;
    });
    

    return (
        <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            monthsShown= {isMobile ? 1 : 2}
            className = "datapicker"
            calendarClassName="reservation"
            minDate = {new Date()}
            maxDate={addDays (new Date(), 364)}
            excludeDates={datesExcluded}
            calendarStartDay={1}     
        />
    );
};

export default DatePickerReservation;