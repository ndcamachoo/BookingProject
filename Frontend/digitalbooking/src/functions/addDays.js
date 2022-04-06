const addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days + 1);
    return result;
};

export default addDays;