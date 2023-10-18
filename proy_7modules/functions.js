const functions = {};

const signo = (numero)=> {
    if (numero > 0) {
        return "Positivo";
      } else if (numero < 0) {
        return "Negativo";
      } else {
        return "Cero";
      }

}
 const encontrarCaracter =  (caracterBuscado) => {
    const datos = ['A', 'B', 'C', 'D', 'E','a','b','c','d'];
    if (datos.includes(caracterBuscado)) {
        return 'Se encontro '; 
      } else {
        return 'No se a encontrado ';
      }
    }
 const encontrarBebida = (bebida) => {
    const datos2 = ["vino", "cerveza", "gaseosa", "agua"];

  if (datos2.includes(bebida)) {
    return 'SI se encuentra ' ;
  } else {
    return 'No esta dieponible en este momento.';
  }
 }
 const  medioTransporte = (medio) => {
    const mediosCondinero = ['avion','flota'];
    const mediosRopa = ['carro', 'bicicleta'];
    if (mediosCondinero.includes(medio)) {
        return 'dinero suficiente para el pasaje ';
    }   else if (mediosRopa.includes(medio)) {
     return 'llevar ropa ';
    } else  {  
        return 'Este medio de transporte no se encoentra ';
    }
 }
  function facturaProducto(cantidad, precio, descuento) {
  
    let precioo = cantidad * precio;
    if (precioo > 50000) {
      let calculo =  ((cantidad * precio) * 0.1    );
      let todo = (precioo - calculo );
     console.log(`Tines  descuento del 10% por compras mayor a 50000, total a pagar :${todo}`);
    } else {
     let precioTotal1 = cantidad * precio;
     console.log( `Si haces compras mayores a 50000 tendras un 10% total a pagar: ${precioTotal1}` );
    }
       
  }
  
  const bebidaComida = (menu) => {  
    const cosas = ['carne', 'pescado', 'verdura'];
    if (cosas.includes(menu)) {
        switch (menu) {
            case "carne":
                return "Recominda vino tinto";
            case "pescado":
                return "Recominda vino blanco";
            case "verdura":
                return "Recominda agua";
        }
    }
    return "Recominda agua";
}
const salaJuegos = (pagos) =>{
  const acceso = ['4000', '3000', '2000', '1000' ]
  if (acceso.includes(pagos)){
    switch (pagos){
      case "4000":
        return "Consolas, Juegos 2D, Juegos 3D, Realidad Virtual";
        case '3000':
          return "Consolas, Juegos 2D, Juegos 3D";
        case '2000':
          return "Consolas, Juegos 2D";
        case '1000':
          return "Consolas";
    }
  }
  return "ingresar más dinero";
}
function contarNumero(numero) {
  if (numero <= 0 || !Number.isInteger(numero)) {
    console.log(" Ingresa un número entero positivo.");
    return;
  }

  let pares1 = []
  for (let i = 1; i <= numero; i++) {
    pares1.push(i);
  }
  return pares1;

}
function  numerosPares(numero2) {
  
  if (numero2 < 0 || !Number.isInteger(numero2)) {
    return "Por favor ingresa un número entero no negativo.";
  }

  let pares = [];
  for (let i = 0; i <= numero2; i += 2) {
    pares.push(i);
  }

  return pares;
}
function tablaMultiplicar(numero3) {
  if (!Number.isInteger(numero3)) {
    console.log("Por favor ingresa un número entero.");
    return;
  }

  for (let i = 1; i <= 10; i++) {
    let resultado = numero3 * i;
    console.log(`${numero3} x ${i} = ${resultado}`);
  }
}
function repetirCaracter(caracter, numero) {
  if (!Number.isInteger(numero) || numero < 0) {
    console.log("Por favor ingresa un número entero no negativo.");
    return;
  }

  let resultado = "";
  for (let i = 0; i < numero; i++) {
    resultado += caracter;
  }

  return resultado;
}
function contadorBase(base) {
  if (!Number.isInteger(base) || base < 2 || base > 36) {
    console.log("Por favor ingresa una base válida entre 2 y 36.");
    return [];
  }

  let resultados = [];

  for (let i = 0; i < base; i++) {
    for (let j = 0; j < base; j++) {
      let numero = i * base + j;
      if (numero < 10) {
        resultados.push(`0${numero.toString(base)}`);
      } else {
        resultados.push(numero.toString(base));
      }
    }
  }

  return resultados;
}

let claves = ["clave1", "clave2", "clave3"];
let intentos = 0;
let registros = [];

function inicioSesion(clave) {
  if (claves.includes(clave)) {
    registros.push(`Intento ${intentos + 1}: ¡Inicio de sesión exitoso!`);
  } else {
    intentos++;
    if (intentos < 3) {
      registros.push(`Intento ${intentos}: Clave incorrecta. Te quedan ${3 - intentos} intentos.`);
    } else {
      registros.push("Intento fallido, alerta de intruso. Acceso bloqueado.");
    }
  }
  return registros;
}
function minimoMaximo (numeros)  {
  console.log(`El valor minimo del arreglo de un numero es ${Math.min(...numeros)}`);
  console.log(`El valor mayor del arreglo de un numero es ${Math.max(...numeros)}`);
  console.log(`El valor del promedio es ${Math.min(...numeros) + Math.max(...numeros) /2}`);
}
function numerosPares7(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    console.log("Por favor ingresa un arreglo de números.");
    return;
  }

  let pares = numeros.filter(num => num % 2 === 0);

  console.log("Cantidad de números pares:", pares.length);
  console.log("Números pares:", pares);
}






  




const interfazSigno = (numero) => {
    
    console.log('*********************************************************'.cyan);
    console.log(`*                  `.cyan,                               `FUNCION SIGNO`.bgGreen,`                      *`.cyan);
    console.log('*********************************************************'.cyan);
    console.log(`*            `.cyan,              `El numero`.yellow,` ${numero}`.green,` es `.yellow,` `+ functions.signo(numero).green,`             *`.cyan);
    console.log(`*********************************************************\n`.cyan);

}
const interfazcaracter = (caracterBuscado) => {
    
    console.log('*********************************************************'.yellow);
    console.log(`*                 `.yellow,                            `FUNCION CARACTER`.bgRed,`                    *`.yellow);
    console.log('*********************************************************'.yellow);
    console.log(`*            `.yellow,         `el caracter`.blue,` ${caracterBuscado}`.green, ` : `.blue,` `+ functions.encontrarCaracter(caracterBuscado).green,`         *`.yellow);
    console.log(`*********************************************************\n`.yellow);

}
const interfazBebida = (bebida) => {
    
    console.log('*********************************************************');
    console.log('*                   FUNCION BEBIDA                      *');
    console.log('*********************************************************');
    console.log(`*        La bebida ${bebida} ` + functions.encontrarBebida(bebida)+`       *`);
    console.log(`*********************************************************\n`);

}
const interfazmedios = (medio) => {
    
    console.log('*********************************************************');
    console.log('*                   TRANSPORTES                        *');
    console.log('*********************************************************');
    console.log(`*        el   ${medio} requiere ` + functions.medioTransporte(medio)+`       *`);
    console.log(`*********************************************************\n`);

}
const interfazDescuento = (cantidad, precio, descuento) => {
    
    console.log('*********************************************************');
    console.log('*                   DESCUENTOS                       *');
    console.log('*********************************************************');
    console.log(`*        el   ${cantidad, precio, descuento} requiere ` + functions.facturaProducto(cantidad, precio, descuento)+`       *`);
    console.log(`*********************************************************\n`);

}
const interfazComidabebida = (menu) => {
    
  console.log('*********************************************************');
  console.log('*                       MENU                            *');
  console.log('*********************************************************');
  console.log(`*        el plato  ${menu}  ` + functions.bebidaComida(menu)+`         *`);
  console.log(`*********************************************************\n`);

}
const interfazjuegos = (pagos) => {
    
  console.log('*********************************************************');
  console.log('*                       SALA                            *');
  console.log('*********************************************************');
  console.log(`*        El pago  ${pagos} te da acceso a ` + functions.salaJuegos(pagos)+`         *`);
  console.log(`*********************************************************\n`);

}
const interfazContarNumero = (numero) => {
    
  console.log('*********************************************************');
  console.log('*                   CONTADOR NUMERO                     *');
  console.log('*********************************************************');
  console.log(`*          El numero  ${numero} : ` + functions.contarNumero(numero)+`         *`);
  console.log(`*********************************************************\n`);

}
const interfazNUmeroPares = (numero2) => {
    
  console.log('*********************************************************');
  console.log('*                      CONTADOR PAR                     *');
  console.log('*********************************************************');
  console.log(`*             El numero  ${numero2} : ` + functions.numerosPares(numero2)+`              *`);
  console.log(`*********************************************************\n`);

}
const interfazTablaMultiplicar = (numero3) => {
    
  console.log('*********************************************************');
  console.log('*                      TABLA MULTIPLICAR                *');
  console.log('*********************************************************');
  console.log(`*             La tabla del  ${numero3} es : ` + functions.tablaMultiplicar(numero3)+`            *`);
  console.log(`*********************************************************\n`);

}
const interfazRepetirCaracter = (caracter, numero) => {
    
  console.log('*********************************************************');
  console.log('*                      REPETIR CARACTER                 *');
  console.log('*********************************************************');
  console.log(`*                   Repetir ${caracter, numero} veces el siguiente caracter ${caracter} : ` + functions.repetirCaracter(caracter, numero)+`             *`);
  console.log(`*********************************************************\n`);

}
const interfazContadorBase = (base) => {
    
  console.log('*********************************************************');
  console.log('*                      CONTADOR BASE                    *');
  console.log('*********************************************************');
  console.log(`*             Caracter  ${base} base n es : ` + functions.contadorBase(base)+`            *`);
  console.log(`*********************************************************\n`);

}
const interfazClave = (clave) => {
    
  console.log('*********************************************************');
  console.log('*                      INICIO DE SESION                 *');
  console.log('*********************************************************');
  console.log(`*             Su clave   ${clave}  : ` + functions.inicioSesion(clave)+`            *`);
  console.log(`*********************************************************\n`);

}
const interfazMinimoMaximo = (numeros) => {
    
  console.log('*********************************************************');
  console.log('*                      MINIMO MAXIMO                     *');
  console.log('*********************************************************');
  console.log(`*  Numeros proporcionados   ${numeros}  : esto es ` + functions.minimoMaximo(numeros)+`         *`);
  console.log(`*********************************************************\n`);

}
const interfazNumeroPares7 = (pares) => {
    
  console.log('*********************************************************');
  console.log('*                      NUMEROS PARES                    *');
  console.log('*********************************************************');
  console.log(`*             Su clave   ${pares}  : ` + functions.numerosPares7(pares)+`            *`);
  console.log(`*********************************************************\n`);

}






functions.signo = signo;
functions.interfazSigno = interfazSigno;
functions.encontrarCaracter = encontrarCaracter;
functions.interfazcaracter = interfazcaracter;
functions.encontrarBebida = encontrarBebida;
functions.interfazBebida = interfazBebida;
functions.medioTransporte = medioTransporte;
functions.interfazmedios = interfazmedios;
functions.interfazDescuento = interfazDescuento;
functions.facturaProducto = facturaProducto;
functions.bebidaComida = bebidaComida;
functions.interfazComidabebida = interfazComidabebida;
functions.interfazjuegos = interfazjuegos;
functions.salaJuegos = salaJuegos;
functions.interfazContarNumero = interfazContarNumero;
functions.contarNumero = contarNumero;
functions.interfazNUmeroPares = interfazNUmeroPares;
functions.numerosPares = numerosPares; 
functions.interfazTablaMultiplicar =interfazTablaMultiplicar;
functions.tablaMultiplicar = tablaMultiplicar;
functions.repetirCaracter = repetirCaracter;
functions.interfazRepetirCaracter = interfazRepetirCaracter;
functions.contadorBase = contadorBase;
functions.interfazContadorBase = interfazContadorBase;
functions.inicioSesion = inicioSesion;
functions.interfazClave = interfazClave;
functions.minimoMaximo = minimoMaximo;
functions.interfazMinimoMaximo = interfazMinimoMaximo;
functions.numerosPares7 = numerosPares7;
functions.interfazNumeroPares7 = interfazNumeroPares7;

module.exports = functions;