export default function validate(values) {
  let errors = {};

  if (!values.nombre.trim()) {
    errors.nombre = "Este campo es requerido";
  }

  if (!values.apellido.trim()) {
    errors.apellido = "Este campo es requerido";
  }

  if (!values.email) {
    errors.email = "Este campo es requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Ingrese un email válido";
  }

  if (!values.password) {
    errors.password = "Este campo es requerido";
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe tener más de 6 caracteres";
  }

  if (!values.repassword) {
    errors.repassword = "Este campo es requerido";
  } else if (values.repassword !== values.password) {
    errors.repassword = "Las contraseñas no coinciden";
  }
  return errors;
}
