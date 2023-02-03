
let arrayConexionesAgua = []
let arrayConexionesCloaca = []

const btnAgua = document.getElementById("btnAgua");
const btnCloaca = document.getElementById("btnCloaca");



class ConexionAgua {
  constructor(distConexion, tipoConexion, medidor, precio) {
    this.distConexion = distConexion;
    this.tipoConexion = tipoConexion;
    this.medidor = medidor
    this.precio = precio
  }
  verInfoConexion() {

    alert(`La conexion solicitada es ${this.distConexion} en ${this.tipoConexion} , ${this.medidor} `)

  }


}
class ConexionCloaca {
  constructor(distConexion, tipoConexion, precio) {
    this.distConexion = distConexion;
    this.tipoConexion = tipoConexion;
    this.precio = precio;
  }
  verInfoConexion() {
    alert(`La conexion solicitada es  ${this.distConexion} en ${this.tipoConexion}`)
  }
}
class DerechoDeVolcamiento {
  constructor(precio) {
    this.precio = precio;
  }

}
arrayConexionesCloaca.push(conexionCloacaCortaVereda = new ConexionCloaca("corta", "vereda", " $ 19.340,70"))
arrayConexionesCloaca.push(conexionCloacaMediaTierra = new ConexionCloaca("Media", "Tierra", "$ 39.477,93"))
arrayConexionesCloaca.push(conexionCloacaMediaAsf = new ConexionCloaca("Media", "Asfalto", "$ 46.705,24"))
arrayConexionesCloaca.push(conexionCloacaMediaHorm = new ConexionCloaca("Media", "Hormigón", " $ 50.541,66"))



arrayConexionesAgua.push(conexionCountry = new ConexionAgua("corta", "vereda", "con medidor", "48.710,77"))
arrayConexionesAgua.push(conexionBarrioCortaAsfalto = new ConexionAgua("corta", "asfalto", "sin medidor", "31.818,77"))
arrayConexionesAgua.push(conexionBarrioCortaAsfaltoMed = new ConexionAgua("corta", "asfalto", "con medidor", "55.898,86"))
arrayConexionesAgua.push(conexionBarrioLargaAsfalto = new ConexionAgua("Larga", "asfalto", "sin medidor", "42.656,82"))
arrayConexionesAgua.push(conexionBarrioLargaAsfaltoMed = new ConexionAgua("Larga", "asfalto", "con medidor", "66.736,91"))
arrayConexionesAgua.push(conexionBarrioCortaTierra = new ConexionAgua("corta", "tierra", "sin medidor", "26.696,49"))
arrayConexionesAgua.push(conexionBarrioLargaTierra = new ConexionAgua("larga", "tierra", "sin medidor", "31.902,94"))
arrayConexionesAgua.push(conexionBarrioCortaHorm = new ConexionAgua("corta", "hormigón", "sin medidor", "36.091,35"))
arrayConexionesAgua.push(conexionBarrioLargaHorm = new ConexionAgua("larga", "hormigón", "sin medidor", "51.812,54"))


localStorage.setItem("ConexionesAgua", JSON.stringify(arrayConexionesAgua));
localStorage.setItem("ConexionesCloaca", JSON.stringify(arrayConexionesCloaca));


function calcularCuotas(total, divisor) {

  let resultado = (total) / (divisor);
  return (resultado.toFixed(2))
}

function alertContinuar() {
  alert("Puede seguir la solicitud ingresando aqui https://lacalera.gob.ar/ ")
}



// FUNCION- Listado de Barrios, prompt.

function listaBarrios() {
  barrio = prompt("Seleccione su Barrio \n 1 - Cinco Lomas \n 2 - Estanzuela\n 3 - Los Prados\n 4 - Cuesta Colorada \n 5 - La Campana \n 6 - Rumy\n 7 - Centro \n 8 - La Rufina\n 9 - Industrial \n 10 - La Deseada \n 11 - La Cuesta V. Residencial ")
  barrio = parseInt(barrio)

}

btnAgua.addEventListener("click", (evento) => {
  evento.preventDefault();

  listaBarrios()
  switch (barrio) {

    case 1:
    case 2:
    case 8:
    case 10:
      case 11:

      conexionCountry.verInfoConexion()
      alert("El precio de la conexion es de " + "$ " + conexionCountry.precio + " que se puede abonar hasta en 3 cuotas sin interes")
      formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
      formaDePago = parseInt(formaDePago)
      if (formaDePago == 1) {

        alertContinuar()
      }
      else {
        alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(48710.77, 3)))
        alertContinuar()
      }
      break;

    case 3:
      domicilio = prompt("Ingrese la calle en donde vive\n 1 - Gabriel Garcia Marquez\n 2 - Jorge Amado\n 3 - Ruben Dario\n 4 - Miguel de Cervantes")
      altura = prompt("Ingrese la altura (en numeros)")
      altura = parseInt(altura)
      if ((altura) % 2 == 0) {
        conexionBarrioCortaAsfaltoMed.verInfoConexion()
        alert("El precio de su conexion es de " + "$ " + conexionBarrioCortaAsfaltoMed.precio + " que se puede abonar hasta en 3 cuotas sin interes")
        formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
        if (formaDePago == 1) {


          alertContinuar()
          break;
        }
        else {
          alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(55898.86, 3)))

          alertContinuar()
          break;
        }
      }
      else {
        conexionBarrioLargaAsfaltoMed.verInfoConexion()
      }
      alert("El precio de su conexion es de  " + "$ " + conexionBarrioLargaAsfaltoMed.precio + " que se puede abonar hasta en 3 cuotas sin interes")
      formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
      if (formaDePago == 1) {


        alertContinuar()

      }
      else {
        alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(66736.91, 3)))

        alertContinuar()
      }

      break;

    case 4:
      domicilio = prompt("Ingrese la calle en donde vive\n 1 - Los Aromos\n 2 -Los Algarrobos\n 3 - Los Claveles\n 4 - Las Violetas")
      altura = prompt("Ingrese la altura (en numeros)")
      altura = parseInt(altura)
      if ((altura) % 2 == 0) {
        conexionBarrioCortaTierra.verInfoConexion()

        alert("El precio de su conexion es de  " + "$ " + conexionBarrioCortaTierra.precio + " que se puede abonar hasta en 3 cuotas sin interes")
        formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
        if (formaDePago == 1) {
          alertContinuar()

        }
        else {
          alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(26696.49, 3)))
          alertContinuar()
        }
        break;

      }
      else {
        conexionBarrioLargaTierra.verInfoConexion()
        alert("El precio de su conexion es de  " + "$ " + conexionBarrioLargaTierra.precio + " que se puede abonar hasta en 3 cuotas sin interes")

      }
      formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
      if (formaDePago == 1) {
        alertContinuar()

      }
      else {
        alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(31902.94, 3)))
        alertContinuar()
      }
    case 5:
      domicilio = prompt("Ingrese la calle en donde vive\n 1 - Brasil\n 2 - Colombia\n 3 - Pje Marusich\n 4 - Rio Paraná")
      altura = prompt("Ingrese la altura (en numeros)")
      altura = parseInt(altura)
      if ((altura) % 2 == 0) {
        conexionBarrioCortaTierra.verInfoConexion()

        alert("El precio de su conexion es de  " + "$ " + conexionBarrioCortaTierra.precio + " que se puede abonar hasta en 3 cuotas sin interes")
        formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
        if (formaDePago == 1) {
          alertContinuar()

        }
        else {
          alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(26696.49, 3)))
          alertContinuar()
        }
        break;

      }
      else {
        conexionBarrioLargaTierra.verInfoConexion()
        alert("El precio de su conexion es de  " + "$ " + conexionBarrioLargaTierra.precio + " que se puede abonar hasta en 3 cuotas sin interes")

      }
      formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
      if (formaDePago == 1) {
        alertContinuar()

      }
      else {
        alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(31902.94, 3)))
        alertContinuar()
      }


      break;

    case 6:
      domicilio = prompt("Ingrese la calle en donde vive\n 1 - Lago Argentino\n 2 - Pje Vecinal\n 3 - Juan Minetti")
      altura = prompt("Ingrese la altura (en numeros)")
      altura = parseInt(altura)
      if ((altura) % 2 == 0) {
        conexionBarrioCortaTierra.verInfoConexion()

        alert("El precio de su conexion es de  " + "$ " + conexionBarrioCortaTierra.precio + " que se puede abonar hasta en 3 cuotas sin interes")
        formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
        if (formaDePago == 1) {
          alertContinuar()

        }
        else {
          alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(26696.49, 3)))
          alertContinuar()
        }
        break;

      }
      else {
        conexionBarrioLargaTierra.verInfoConexion()
        alert("El precio de su conexion es de  " + "$ " + conexionBarrioLargaTierra.precio + " que se puede abonar hasta en 3 cuotas sin interes")

      }
      formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
      if (formaDePago == 1) {
        alertContinuar()

      }
      else {
        alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(31902.94, 3)))
        alertContinuar()
      }


      break;
    case 7:
      domicilio = prompt("Ingrese la calle en donde vive\n 1 - Rivadavia\n 2 - San Martín\n 3 - 9 de Julio\n 4 - Saul Moyano")
      altura = prompt("Ingrese la altura (en numeros)")
      altura = parseInt(altura)
      if ((altura) % 2 == 0) {
        conexionBarrioCortaHorm.verInfoConexion()
        alert("El precio de su conexion es de " + "$ " + conexionBarrioCortaHorm.precio + " que se puede abonar hasta en 3 cuotas sin interes")
        formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
        if (formaDePago == 1) {

          alertContinuar()
          break;
        }
        else {
          alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(36095.35, 3)))

          alertContinuar()
          break;
        }
      }
      else {
        conexionBarrioLargaHorm.verInfoConexion()
      }
      alert("El precio de su conexion es de  " + "$ " + conexionBarrioLargaHorm.precio + " que se puede abonar hasta en 3 cuotas sin interes")
      formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
      if (formaDePago == 1) {

        alertContinuar()

      }
      else {
        alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(51812.34, 3)))

        alertContinuar()
      }

      break;

    case 9:
      domicilio = prompt("Ingrese la calle en donde vive\n 1 - Jose Hernandez\n 2 - Cabo Brizuela\n 3 - Rondeau\n 4 - Eva Perón")
      altura = prompt("Ingrese la altura (en numeros)")
      altura = parseInt(altura)
      if ((altura) % 2 == 0) {
        conexionBarrioCortaAsfalto.verInfoConexion()
        alert("El precio de su conexion es de " + "$ " + conexionBarrioCortaAsfalto.precio + " que se puede abonar hasta en 3 cuotas sin interes")
        formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
        if (formaDePago == 1) {

          alertContinuar()
          break;
        }
        else {
          alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(31817.77, 3)))

          alertContinuar()
          break;
        }
      }
      else {
        conexionBarrioLargaAsfalto.verInfoConexion()
      }
      alert("El precio de su conexion es de  " + "$ " + conexionBarrioLargaAsfalto.precio + " que se puede abonar hasta en 3 cuotas sin interes")
      formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
      if (formaDePago == 1) {

        alertContinuar()

      }
      else {
        alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(42656.82, 3)))

        alertContinuar()
      }

      break;

      default:
        alert("Ingrese un barrio!")




  }
}
)

btnCloaca.addEventListener("click",evento => {

evento.preventDefault();


listaBarrios()
switch (barrio) {
  case 2:
  case 10:
    case 11:
    conexionCloacaCortaVereda.verInfoConexion()
    alert("El precio de su conexion es de " + conexionCloacaCortaVereda.precio + " que se puede abonar hasta en 3 cuotas sin interes")

    alert("Además debe abonar un derecho de conexion con un monto de  $ 59.889,50 que se puede abonar hasta en 9 cuotas sin interes o $ 49.916,25 de contado")
    formaDePago = prompt("Elegir forma de pago de la conexion \n  1 - Contado \n  2 - Financiado en cuotas")

    if (formaDePago == 1) {
      alertContinuar()

    }
    else {
      alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(19340.70, 3)))

    }
    formaDePago = prompt("Elegir forma de pago del derecho de volcamiento \n  1 - Contado \n  2 - Financiado en cuotas")

    if (formaDePago == 1) {
      alert("El derecho de volcamiento le quedaria en un pago de $ 49.916,25")

    }
    else {

      alert(" El derecho de volcamiento le quedaria en 9 cuotas de $ " + (calcularCuotas(59876.76, 9)))

    }

    alertContinuar()
    break;

  case 3:
    conexionCloacaMediaAsf.verInfoConexion()
    alert("El precio de su conexion es de " + conexionCloacaMediaAsf.precio + " que se puede abonar hasta en 3 cuotas sin interes")

    alert("Además debe abonar un derecho de conexion con un monto de  $ 59.889,50 que se puede abonar hasta en 9 cuotas sin interes o $ 49.916,25 de contado")
    formaDePago = prompt("Elegir forma de pago de la conexion \n  1 - Contado \n 2 - Financiado en cuotas")


    if (formaDePago == 1) {

    }
    else {
      alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(46705.44, 3)))

    }
    formaDePago = prompt("Elegir forma de pago del derecho de volcamiento \n  1 - Contado \n 2 - Financiado en cuotas")

    if (formaDePago == 1) {
      alert("El derecho de volcamiento le quedaria en un pago de $ 49.916,25")

    }
    else {

      alert(" El derecho de volcamiento le quedaria en 12 cuotas de $ " + (calcularCuotas(59876.76, 12)))

    }
    alertContinuar()
    break;

  case 1:
    case 4:
      case 6:
        case 7:
          case 8:


    alert("Aún no tiene disponibilidad de la red cloacal para conectarse")
    
    break;


  case 9:
    conexionCloacaMediaAsf.verInfoConexion()
    alert("El precio de su conexion es de " + conexionCloacaMediaAsf.precio + " que se puede abonar hasta en 3 cuotas sin interes")

    alert("Además debe abonar un derecho de conexion con un monto de  $ 59.889,50 que se puede abonar hasta en 9 cuotas sin interes o $ 49.916,25 de contado")
    formaDePago = prompt("Elegir forma de pago de la conexion \n  1 - Contado \n 2 - Financiado en cuotas")


    if (formaDePago == 1) {

      alertContinuar()

    }
    else {
      alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(46705.24, 3)))

    }
    formaDePago = prompt("Elegir forma de pago del derecho de volcamiento \n  1 - Contado \n 2 - Financiado en cuotas")

    if (formaDePago == 1) {
      alert("El derecho de volcamiento le quedaria en un pago de $ 49.916,25")

    }
    else {

      alert(" El derecho de volcamiento le quedaria en 18 cuotas de $ " + (calcularCuotas(59876.76, 18)))

    }
    alertContinuar()

    break;


  case 5:
    conexionCloacaMediaTierra.verInfoConexion()
    alert("El precio de su conexion es de " + conexionCloacaMediaTierra.precio + " que se puede abonar hasta en 3 cuotas sin interes")

    alert("Además debe abonar un derecho de conexion con un monto de  $ 59.889,50 que  se puede abonar hasta en 9 cuotas sin interes o $ 49.916,25 de contado")
    formaDePago = prompt("Elegir forma de pago de la conexion \n  1 - Contado \n 2 - Financiado en cuotas")


    if (formaDePago == 1) {

      alertContinuar()

    }
    else {
      alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(39499.93, 3)))

    }
    formaDePago = prompt("Elegir forma de pago del derecho de volcamiento \n  1 - Contado \n 2 - Financiado en cuotas")

    if (formaDePago == 1) {
      alert("El derecho de volcamiento le quedaria en un pago de $ 49.916,25")

    }
    else {

      alert(" El derecho de volcamiento le quedaria en 36 cuotas de $ " + (calcularCuotas(59876.76, 36)))
      alertContinuar()

    }

  break;


  default: 

alert("Ingrese un barrio!")

  
}
})













