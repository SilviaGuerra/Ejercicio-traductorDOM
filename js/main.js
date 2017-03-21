function translate(){
  var title = document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");
  var remember = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];

  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo Electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar Sesión";

};

function impresion(){
  var correo = document.getElementById("inputEmail").value;
  var pass = document.getElementById("inputPassword").value;

  document.getElementById("datos").innerHTML = "Datos del formulario";

  document.getElementById("usuario").innerHTML = "El correo ingresado es: <br>" + correo + "<br> La clave ingresada es: <br>" + pass;
}

translate();
