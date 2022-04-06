export default function checkSubmitable(values) {
  if(values.password.length >= 6){
    if (values.nombre.trim() && values.apellido.trim() && values.email.trim() && values.password.trim() && values.repassword.trim() && values.repassword === values.password && /\S+@\S+\.\S+/.test(values.email)){
        return true;
    }else{
        return false;
    }    
} else{
    return false;
}  
}
  