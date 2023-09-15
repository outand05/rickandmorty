export default function validation(data) {
  const userRegexp = /\S+@\S+\.\S+/
  const passwordRegexp = new RegExp("[0-9]")
  

  const errors = {};

  
  if(!userRegexp.test(data.user)){
      errors.user = 'Debe ingresar un Usuario valido.'
  }
  
  if(!passwordRegexp.test(data.password)){
    errors.password = "Debe contener almenos un numero "
  }
  if(data.password.length > 30){
    errors.password = 'Máximo de caracteres!'
}
  if(data.password.length < 6 || data.password.length > 10){
      errors.password = 'Debe tener entre 6 y 10 caracteres'
  }
  return errors;
}
