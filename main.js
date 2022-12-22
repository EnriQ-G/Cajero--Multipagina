let cuentas = [
  {nombre:"Mali", saldo:200, pass: "abc"},
  {nombre:"Gera", saldo:500, pass: "abc"},
  {nombre:"Maui", saldo:70, pass: "abc"}
]

const [nombre, saldo, pass] = cuentas

var pos = null

function verificar(){
var user = document.getElementById("cuenta").value;
var user1 = String(user)

var password = document.getElementById("contraseña").value;
var password1 = String(password)

  for(var  i = 0; i < cuentas.length ; i++){
    console.log(i)
    if(user1 == cuentas[i].nombre && password1 == cuentas[i].pass){
      alert("Bienvenido "+ cuentas[i].nombre)
      alert("Tu saldo es: "+ cuentas[i].saldo + " pesos")
      window.localStorage.setItem("usuario", cuentas[i].nombre)
      window.localStorage.setItem("saldo", cuentas[i].saldo)
      window.location = "Cajero.html"
      var fondo_actual = document.getElementById("dinero");
      fondo_actual.innerHTML = "Tu saldo es de: " + (cuentas[i].saldo + " pesos")
      pos = i
      return i
      

    }

  }
  alert("Usuario o Password Incorrecto")


  
}

function registro(){
  cuentas.push({nombre:document.getElementById("cuenta").value, saldo: 0, pass:"abc" })
  console.log(cuentas)
  window.localStorage.setItem("usuario", document.getElementById("cuenta").value)
  window.localStorage.setItem("saldo", 0)
  window.location = "Cajero.html"
}



/*function depositar() {
var cantidad = document.getElementById("cantidad").value;
var cantidadNumero = parseFloat(cantidad)

cuentas[pos].saldo += cantidadNumero
console.log("Estoy depositando...");
console.log("Mis fondos actualmente son: " + cuentas[pos].saldo)

var fondo_actual = document.getElementById("dinero");
fondo_actual.innerHTML = "Tu saldo es de: " + cuentas[pos].saldo + " pesos"
}

function retirar(){
var cantidad = document.getElementById("cantidad").value;
var cantidadNumero = parseFloat(cantidad)

cuentas[pos].saldo -=cantidadNumero
console.log("Estoy retirando...");
console.log("Mis fondos actualmente son: " + cuentas[pos].saldo)

var fondo_actual = document.getElementById("dinero");
fondo_actual.innerHTML = "Tu saldo es de: " + cuentas[pos].saldo + " pesos"
}
*/

function login_page(){
  window.location = "Login.html"
}

function singup_page(){
  window.location = "Sing Up.html"
}