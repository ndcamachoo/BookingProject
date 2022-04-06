const convertDateFormat = (date) => {
    const dateConverted = date.split('/')
    const dateFormat = (dateConverted[2]) + '-' + (dateConverted[1]) + '-' + (dateConverted[0])
    const dateToDate = new Date(dateFormat)
    dateToDate.setDate(dateToDate.getDate() + 1);
    return dateToDate
}

export default convertDateFormat;

