


let conexiones = []
let carrito = []

const selectConexion = document.getElementById("selectConexion")
const btnConsultar = document.getElementById("btnConsultar")
const tabla = document.getElementById("tabla")
const inputApellido = document.getElementById("inputApellido")
const inputNombre = document.getElementById("inputNombre")
const inputManzana = document.getElementById("inputManzana")
const forms = document.querySelectorAll("form")
const bodyTabla = document.querySelector("#tablaId")
const optionSelect = document.getElementById("select")
const btnRequisitos = document.getElementById("btnRequisitos")
const btnConexion = document.getElementById("btnConexion")



conexiones.push(new ConexionCloaca("Industrial", "Media", "46.705,24", "49.916,25", ",49"))
conexiones.push(new ConexionCloaca("Dr.Cocca", "Media", "39.477,93", " 49.916,25 ", ",18"))
conexiones.push(new ConexionCloaca("La Estanzuela I", "Vereda", "19.340,70", " 49.916,25 ", ",95"))
conexiones.push(new ConexionCloaca("La Estanzuela II", "Vereda", "19.340,70", " 49.916,25 ", ",95"))
conexiones.push(new ConexionCloaca("Terrazas de La Estanzuela", "Vereda", "19.340,70", " 49.916,25", ",95")) 
conexiones.push(new ConexionCloaca("La Cuesta Villa Residencial", "Vereda", " 19.340,70", "49.916,25", ",95"))
conexiones.push(new ConexionCloaca("Los Prados I", "Media", "46.705,24", " 49.916,25 ", ",49"))
conexiones.push(new ConexionCloaca("Los Prados II", "Media", "46.705,24", " 49.916,25 ", ",49"))
conexiones.push(new ConexionCloaca("Altos de La Calera", "Media", "46.705,24", " 49.916,25 ", ",49"))
conexiones.push(new ConexionCloaca("Minetti 3", "Media", "39.478,93", " 49.916,25 ", ",18"))

localStorage.setItem("conexiones", JSON.stringify(conexiones));
conexiones = JSON.parse(localStorage.getItem("conexiones"))





fetch("scripts/conexiones.json")
.then((response) => {
  if (response.ok) {
    return response.json();
  }
  else {
    throw new Error("Hubo un error en el fetch" + response.status)
  }

}).then((data) => {
  console.log(data);
}).catch((error) => console.log(error))


conexiones = JSON.parse(localStorage.getItem('conexiones'))
if (conexiones === null) {
  conexiones = []
}

window.addEventListener("DOMContentLoaded", popularDropDown)



btnConsultar.addEventListener("click", (e) => {
  e.preventDefault()
  buscarConexiones()
  localStorage.setItem("carrito", JSON.stringify(carrito))
})
function limpiarForms() {
  forms.forEach((form) => {
    form.reset();
  }
  )
}
function popularDropDown() {
  fetch("scripts/conexiones.json")
    .then(response => response.json())
    .then(conexiones => {
      conexiones.forEach(conexion => {
        const option = document.createElement("option");
        option.innerText = `${conexion.barrio}`
        option.value = conexion.barrio;
        selectConexion.appendChild(option);
      })
    })
}
function buscarConexiones() {
  if (inputManzana.value === '' || inputApellido.value === '' || inputLote.value === '' || inputNombre.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Complete el formulario!',

    })
  }
  else {
    fetch("scripts/conexiones.json")
    .then(response => response.json())
    .then(conexiones => {
    let found = conexiones.find(conexion => {
      return conexion.barrio === selectConexion.value;
    })
  

    const tr = document.createElement("tr");
    tr.innerHTML = `
  <td id =" tdNueva">${inputApellido.value + ' ' + inputNombre.value}</td>
  <td>${found.barrio}</td>
  <td>${inputManzana.value}</td>
  <td>${inputLote.value}</td>
  <td>${found.tipo}</td>
  <td>$${found.precio}</td>
  <td>$${found.derecho}</td>
  <td>$${parseFloat(found.precio) + parseFloat(found.derecho) + (found.decimal)}</td>

  `;
    limpiarForms()
    bodyTabla.appendChild(tr);
    Swal.fire({
      imageUrl: 'https://lacalera.gob.ar/wp-content/uploads/2021/03/LOGO-MUNICIPALIDAD-CALERA.png',
      icon: 'success',
      title: 'Consulta generada con exito!',
      showConfirmButton: false,
      timer: 1500
    })
  })
  }
 

}
btnRequisitos.addEventListener("click",(e) => {
  e.preventDefault()
  Swal.fire({
    imageUrl: 'https://lacalera.gob.ar/wp-content/uploads/2021/03/LOGO-MUNICIPALIDAD-CALERA.png',
    title: 'Requisitos de conexión ',
    html: '<p style="font-size: 22;">Acreditar titularidad del inmueble  <br> Presentar ficha catastral actualizada <br> Presentar libre de deuda </p> ',                   
   
  })
  
})
btnConexion.addEventListener("click",(e)=>{
  e.preventDefault()
  Swal.fire({
    imageUrl: 'https://lacalera.gob.ar/wp-content/uploads/2021/03/LOGO-MUNICIPALIDAD-CALERA.png',
    title:"Ingrese a",
    html : '<a style="font-size: 25;" href="https://lacalera.gob.ar" target="_blank">Municipalidad de La Calera</a> <br> <p style="font-size: 22;"> para solicitar la conexión </p>',
    
  })
  


})
