require('colors')

const functions = require('./proy_7modules/functions.js')
    console.clear();

const main = async() =>{
    
    const numero = 10;
    functions.interfazSigno(numero);
    
    const  caracterBuscado = 'a';
    functions.interfazcaracter(caracterBuscado);   
   
    const bebida = 'vino';
    functions.interfazBebida(bebida);
    
    const medio = 'avion';
    functions.interfazmedios(medio);

    const cantidad = 50;
    const precio = 1500;
    const descuento = 10;

    functions.interfazDescuento(cantidad, precio, descuento);

    const menu = 'carne';
    functions.interfazComidabebida(menu);

    const pagos = '4000';
    functions.interfazjuegos(pagos);

    const numero1 = 10;
    functions.interfazContarNumero(numero1);

    const numero2 = 10;
    functions.interfazNUmeroPares(numero2);

    const numero3 = 8;
    functions.interfazTablaMultiplicar(numero3);

    const caracter = 'a';
    const numero4 = 2;
    functions.interfazRepetirCaracter(caracter, numero4);

    const base = 16;
    functions.interfazContadorBase(base);

    const clave = ('clave1');
    functions.interfazClave(clave);

    
    const numeros = [5, 10, 3, 8, 2];
    functions.interfazMinimoMaximo(numeros);

    const numeros1 = [5, 10, 3, 8, 2];
    functions.interfazNumeroPares7(numeros1);
    
};

main(); 