


function calcularCuotas(valor1, valor2) {

  let resultado = (valor1) / (valor2);
  return (resultado)
}

function alertContinuar() {
  alert("Puede seguir la solicitud ingresando aqui https://lacalera.gob.ar/ ")
}

function descuentoContado(a, b) {
  let descuento = (a) - (b * 0.10)
  return descuento
}
function listaBarrios() {
  barrio = prompt("Seleccione su Barrio \n 1 - Cinco Lomas \n 2 - Estanzuela\n 3 - Los Prados\n 4 - Cuesta Colorada \n 5 - La Campana")
  barrio = parseInt(barrio)

}

do {
  opcion = prompt("Solicitud de conexion de Agua y Cloaca \n 1 - Conexion domiciliaria de agua \n 2 - Conexion al servicio cloacal \n 3 - Derecho de volcamiento al servicio cloacal\n 4 - Salir")
  opcion = parseInt(opcion)
  precioAgua5 = 75000
  precioAgua4 = 65000
  precioAgua3 = 50000
  precioAgua2 = 40000
  precioAgua1 = 30000
  precioCloaca5 = 50000
  precioCloaca4 = 40000
  precioCloaca3 = 25000
  precioCloaca2 = 22000
  precioCloaca1 = 18000
  precioVolcamiento = 66000
  switch (opcion) {

    case 1:
      alert("Ingresando al menu de conexion de agua...")
      listaBarrios()
      switch (barrio) {

        case 1:
          alert("El precio de su conexion de agua es de " + "$ " + precioAgua5)
          formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
          formaDePago = parseInt(formaDePago)
          if (formaDePago == 1) {
            alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(precioAgua5, precioAgua5))
            alertContinuar()
          }
          else {
            alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(precioAgua5, 3)))
            alertContinuar()
          }
          break;

        case 2:
          alert("El precio de su conexion es de agua es de " + "$ " + precioAgua4)
          formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
          if (formaDePago == 1) {
            alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(precioAgua4, precioAgua4))

            alertContinuar()

          }
          else {
            alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(precioAgua4, 3)))

            alertContinuar()
          }

          break;

        case 3:
          alert("El precio de su conexion es de agua es de " + "$ " + precioAgua3)
          formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
          if (formaDePago == 1) {
            alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(precioAgua3, precioAgua3))
            alertContinuar()

          }
          else {
            alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(precioAgua3, 3)))
            alertContinuar()
          }


          break;

        case 4:
          alert("El precio de su conexion es de agua es de " + "$ " + precioAgua2)
          formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
          if (formaDePago == 1) {
            alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(precioAgua2, precioAgua2))
            alertContinuar()

          }
          else {
            alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(precioAgua2, 3)))
            alertContinuar()
          }
          break;

        case 5:
          alert("El precio de su conexion es de agua es de " + "$ " + precioAgua1)
          formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
          if (formaDePago == 1) {
            alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(precioAgua1, precioAgua1))
            alertContinuar()

          }
          else {
            alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(precioAgua1, 3)))
            alertContinuar()
          }
          break;


      }

      break;

    case 2:
      alert("Ingresando al menu de conexion de cloaca...")
      listaBarrios()
      switch (barrio) {

        case 1:
          alert("El precio de su conexion de cloaca es de " + "$ " + precioCloaca5)
          formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
          formaDePago = parseInt(formaDePago)
          if (formaDePago == 1) {
            alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(precioCloaca5, precioCloaca5))
            alertContinuar()
          }
          else {
            alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(precioCloaca5, 3)))
            alertContinuar()
          }
          break;

        case 2:
          alert("El precio de su conexion  de cloaca es de " + "$ " + precioCloaca4)
          formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
          if (formaDePago == 1) {
            alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(precioCloaca4, precioCloaca4))

            alertContinuar()

          }
          else {
            alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(precioCloaca4, 3)))

            alertContinuar()
          }

          break;

        case 3:
          alert("El precio de su conexion  de cloaca es de " + "$ " + precioCloaca3)
          formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
          if (formaDePago == 1) {
            alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(precioCloaca3, precioCloaca3))
            alertContinuar()

          }
          else {
            alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(precioCloaca3, 3)))
            alertContinuar()
          }


          break;

        case 4:
          alert("El precio de su conexion  de cloaca es de " + "$ " + precioCloaca2)
          formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
          if (formaDePago == 1) {
            alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(precioCloaca2, precioCloaca2))
            alertContinuar()

          }
          else {
            alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(precioCloaca2, 3)))
            alertContinuar()
          }
          break;

        case 5:
          alert("El precio de su conexion  de cloaca es de " + "$ " + precioCloaca1)
          formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
          if (formaDePago == 1) {
            alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(precioCloaca1, precioCloaca1))
            alertContinuar()

          }
          else {
            alert("Su conexion le quedaria en tres cuotas de " + "$ " + (calcularCuotas(precioCloaca1, 3)))
            alertContinuar()
          }
          break;


      }
      break;

    case 3:
      alert("Ingresando al menu de derecho de volcamiento...")

      listaBarrios()
      switch (barrio) {

        case 1:
          alert("El precio de su derecho de volcamiento es de " + "$ " + precioVolcamiento)
          formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
          formaDePago = parseInt(formaDePago)
          if (formaDePago == 1) {
            alert(" Tiene un descuendo del 10%, por lo que  le quedaria en " + "$ " + descuentoContado(precioVolcamiento, precioVolcamiento))
            alertContinuar()
          }
          else {
            alert("Su derecho de volcamiento le quedaria en 9 cuotas de " + "$ " + (calcularCuotas(precioVolcamiento, 9)))
            alertContinuar()
          }
          break;

        case 2:
          alert("El precio de su derecho de volcamiento es de " + "$ " + precioVolcamiento)
          formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
          if (formaDePago == 1) {
            alert(" Tiene un descuendo del 10%, por lo que  le quedaria en " + "$ " + descuentoContado(precioVolcamiento, precioVolcamiento))

            alertContinuar()

          }
          else {
            alert("Su derecho de volcamiento en 9 cuotas de " + "$ " + (calcularCuotas(precioVolcamiento, 9)))

            alertContinuar()
          }

          break;

        case 3:
          alert("El precio de su derecho de volcamiento es de " + "$ " + precioVolcamiento)
          formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
          if (formaDePago == 1) {
            alert(" Tiene un descuendo del 10%, por lo que  le quedaria en " + "$ " + descuentoContado(precioVolcamiento, precioVolcamiento))
            alertContinuar()

          }
          else {
            alert("Su derecho de volcamiento le quedaria en 12 cuotas de " + "$ " + (calcularCuotas(precioVolcamiento, 12)))
            alertContinuar()
          }


          break;

        case 4:
          alert("El precio de su derecho de volcamiento es de " + "$ " + precioVolcamiento)
          formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
          if (formaDePago == 1) {
            alert(" Tiene un descuendo del 10%, por lo que le quedaria en " + "$ " + descuentoContado(precioVolcamiento, precioVolcamiento))
            alertContinuar()

          }
          else {
            alert("Su derecho de volcamiento le quedaria en 18 cuotas de " + "$ " + (calcularCuotas(precioVolcamiento, 18)))
            alertContinuar()
          }
          break;

        case 5:
          alert("El precio de su derecho de volcamiento es de " + "$ " + precioVolcamiento)
          formaDePago = prompt("Elegir forma de pago\n 1 - Contado\n 2 - Financiado en cuotas ")
          if (formaDePago == 1) {
            alert(" Tiene un descuendo del 10%, por lo que su conexion le quedaria en " + "$ " + descuentoContado(precioVolcamiento, precioVolcamiento))
            alertContinuar()

          }
          else {
            alert("Su derecho de volcamiento le quedaria en 36 cuotas de " + "$ " + (calcularCuotas(precioVolcamiento, 36)))
            alertContinuar()
          }
          break;


      }

      break;

    case 4:
      alert("¡Hasta pronto!")
      break;

    default:
      alert("¡Opcion invalida!")
  }
} while (opcion != 4)





