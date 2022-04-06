const dateFix = (date) => {
  if (date[1].lenght <2 && date[0].lenght  < 2) {
    return `${date[2]}-0${date[1]}-0${date[0]}`;
  } else if (date[1].lenght <2) {
    return `${date[2]}-0${date[1]}-${date[0]}`;
  } else if (date[0].lenght <2) {
    return `${date[2]}-${date[1]}-0${date[0]}`;
  } else {
    return `${date[2]}-${date[1]}-${date[0]}`;
  }
};

export default dateFix;
