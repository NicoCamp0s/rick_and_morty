const { REACT_APP_USER ,REACT_APP_PASSWORD } = process.env


const validation = ({username, password} ,setError ) => {
    console.log(REACT_APP_PASSWORD, REACT_APP_USER);
  
  if(!username) return setError((errores) => ({...errores,username : "Tiene que ingresar usuario"}))
  
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)) return setError((errores) => ({...errores,username : "Email invalido"}))
  
  if (username) setError((errores) => ({...errores,username : ""}))
  
  if(!password) return setError((errores) => ({...errores,password : "Tiene que ingresar clave"}))
  
  if (password !== REACT_APP_PASSWORD) return setError((errores) => ({...errores,password: "Contraseña incorrecta"}))

  if (password) setError((errores) => ({...errores,password : ""}))
  
  if (username === REACT_APP_USER && password === REACT_APP_PASSWORD) return true;
}

export {
    validation
}