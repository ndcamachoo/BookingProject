import diffDates from "./diffDates";
import addDays from "./addDays";

const dateSpace = (startDate, endDate) => {
    let dates = [];
    let diffDate = diffDates(startDate, endDate);
  
    for (let i = 0; i < diffDate; i++) {
      let plusDay = addDays(startDate, i).toISOString().split("T")[0];
      dates.push(plusDay);
    }
    return dates;
};

  export default dateSpace;