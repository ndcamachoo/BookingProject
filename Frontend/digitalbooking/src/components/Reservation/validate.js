export default function validate(values, date) {
  let errors = {};

  if (!values.city.trim()) {
    errors.city = "Este campo es requerido";
  }

  if (!values.hour.trim()) {
    errors.hour = "Este campo es requerido";
  }

  if(date[0] === "___ /___ /___"  && date[1] === "___ /___ /___" ){
    errors.dates = "Ingrese un rango de fechas correcto."
  } 

  return errors;
}
