import { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import { DateContext } from '../SearchBar/DateContext'
import useMediaQuery from "../../hooks/useMediaQuery";

const DatePicker2 = () => {

  const {setDate} = useContext(DateContext);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const isMobile = useMediaQuery('(max-width: 636px)');

  const addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  

  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {setDateRange(update);}}
      customInput={ <input className= "input" type="text"/>}
      isClearable={true}
      className = "datapicker"
      placeholderText = "Check-in/ Check-out"
      monthsShown= {isMobile ? 1 : 2}
      calendarStartDay={1}
      onCalendarClose= { setDate(dateRange)}
      minDate = {new Date()}
      maxDate={addDays (new Date(), 365)}
    />
  );
};

export default DatePicker2;
