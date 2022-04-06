export default function validate(values) {
    let errors = {};
  
    
    if (!values.productAddress.trim()) {
      errors.productAddress = "Ingrese la dirección";
    }

    if (!values.productName.trim()) {
      errors.productName = "Ingrese el nombre del producto";
    }
  
    if (!values.productDescription.trim()) {
      errors.productDescription = "Ingrese una descripción";
    }
   
    if (values.services == []) {
      errors.services = "Seleccione al menos un servicio";
    }


    if (!values.city.country) {
      errors.city = "Ingrese una ciudad";
    }

    if (!values.coordinates[0].trim()) {
      errors.lat = "Ingrese un valor de latitud";
    }

    if (!values.coordinates[1].trim()) {
      errors.long = "Ingrese un valor de longitud";
    }

    if (!values.productCategory.name.trim()) {
      errors.productCategory = "Campo requerido";
    }

    if (values.pricePerNight === 0){
      errors.pricePerNight = "Ingrese el precio por noche"
    }

    if (!values.houseRules.trim()) {
      errors.houseRules = "Campo requerido";
    }

    if (!values.healthSafety.trim()) {
      errors.healthSafety = "Campo requerido";
    }

    if (!values.cancellationPolicy.trim()) {
      errors.cancellationPolicy = "Campo requerido";
    } 

    return errors;
  }
  