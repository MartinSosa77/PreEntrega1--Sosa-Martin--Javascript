
class conexionAgua {
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
class conexionCloaca {
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
  constructor (precio){
    this.precio = precio;
  }
 
}

conexionCloacaCortaVereda = new conexionCloaca("corta", "vereda", " $ 19.340,70");
conexionCloacaMediaTierra = new conexionCloaca("Media", "Tierra", "$ 39.477,93");
conexionCloacaMediaAsf = new conexionCloaca("Media", "Asfalto", "$ 46.705,24");
conexionCloacaMediaHorm = new conexionCloaca("Media", "Hormigón", " $ 50.541,66")



conexionCountry = new conexionAgua("corta", "vereda", "con medidor", "48.710,77")
conexionBarrioCortaAsfalto = new conexionAgua("corta", "asfalto", "sin medidor", "31.818,77")
conexionBarrioCortaAsfaltoMed = new conexionAgua("corta", "asfalto", "con medidor", "55.898,86")
conexionBarrioLargaAsfalto = new conexionAgua("Larga", "asfalto", "sin medidor", "42.656,82")
conexionBarrioLargaAsfaltoMed = new conexionAgua("Larga", "asfalto", "con medidor", "66.736,91")
conexionBarrioCortaTierra = new conexionAgua("corta", "tierra", "sin medidor", "26.696,49")
conexionBarrioLargaTierra = new conexionAgua("larga", "tierra", "sin medidor", "31.902,94")
conexionBarrioCortaHorm = new conexionAgua("corta", "hormigón", "sin medidor", "36.091,35")
conexionBarrioLargaHorm = new conexionAgua("larga", "hormigón", "sin medidor", "51.812,54")


function calcularCuotas(valor1, valor2) {

  let resultado = (valor1) / (valor2);
  return (resultado.toFixed(2))
}

function alertContinuar() {
  alert("Puede seguir la solicitud ingresando aqui https://lacalera.gob.ar/ ")
}


//FUNCION- Descuento del 10% cuando la conexion es de contado

function descuentoContado(a, b) {
  let descuento = (a) - (b * 0.10)
  alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuento.toFixed(2))
  return descuento.toFixed(2)
}
// FUNCION- Listado de Barrios, prompt.

function listaBarrios() {
  barrio = prompt("Seleccione su Barrio \n 1 - Cinco Lomas \n 2 - Estanzuela\n 3 - Los Prados\n 4 - Cuesta Colorada \n 5 - La Campana \n 6 - Rumy\n 7 - Centro \n 8 - La Rufina\n 9 - Industrial \n 10 - La Deseada ")
  barrio = parseInt(barrio)

}
// DO WHILE- CONEXIONES 
do {
  opcion = prompt("Solicitud de conexion de Agua y Cloaca \n 1 - Conexion domiciliaria de agua \n 2 - Conexion al servicio cloacal \n 3 - Salir")
  opcion = parseInt(opcion)

  switch (opcion) {

    case 1:
      alert("Ingresando al menu de conexion de agua...")
      listaBarrios()
      switch (barrio) {

        case 1:
        case 2:
        case 8:
        case 10:

          conexionCountry.verInfoConexion()
          alert("El precio de la conexion es de " + "$ " + conexionCountry.precio + " que se puede abonar hasta en 3 cuotas sin interes")
          formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
          formaDePago = parseInt(formaDePago)
          if (formaDePago == 1) {
            descuentoContado(48710.77, 48710.77)
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
              descuentoContado(55898.86, 55898.86)

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
            alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(66736.91, 66736.91))

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
              alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(26696.49, 26696.49))
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
            alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(31902.94, 31902.94))
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
              alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(26696.49, 26696.49))
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
            alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(31902.94, 31902.94))
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
              alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(26696.49, 26696.49))
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
            alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(31902.94, 31902.94))
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
              descuentoContado(36091.35, 36091.35)

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
            descuentoContado(51812.34, 51812.34)

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
              descuentoContado(31818.77, 31818.77)

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
            descuentoContado(42656.82, 42656.82)

            alertContinuar()

          }
          else {
            alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(42656.82, 3)))

            alertContinuar()
          }

          break;




      }

      break;

    case 2:
      alert("Ingresando al menu de conexion de cloaca...")
      listaBarrios()
      switch (barrio){
        case 1:
          case 2:
            case 8:
              case 10:
                conexionCloacaCortaVereda.verInfoConexion()
                alert("El precio de su conexion es de " + conexionCloacaCortaVereda.precio +" que se puede abonar hasta en 3 cuotas sin interes")
                alert("Además debe abonar un derecho de conexion con un monto de  $ 59.889,50 que se puede abonar hasta en 9 cuotas sin interes")
                alert(" El derecho de volcamiento le quedaria en 9 cuotas de " + calcularCuotas(59876.76,9)
                ) 






      }




      break;


    case 3:
      alert("¡Hasta pronto!")
      break;

    default:
      alert("¡Opcion invalida!")
  }
} while (opcion != 3)



