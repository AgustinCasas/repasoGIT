// Variables
// --------

// Una variable es un espacio de memoria para guardar informacion
//var nombre = "ale" // deja de lado esta forma de crear una variable
let numero = 123456
let string = "una palabra"
let boolean = true; //false 
// variables numericas, strings, cadenas de texto, booleanos
let array = [1, "hola", ["rojo", "verde"], true ] //psiciones que arrancan en 0
let alumnos = {
    nombre : "Ale",
    curso : "FullStack",
    año : "2020",
    semestre : "S01",
    saludar : function(){
        return "hola soy" + this.nombre
    } // usar comilla simple
} 
let nulo = null;
let noDefinido; //undefined;
let noEsNumero = 'hola'/2; //NaN
noEsNumero = 'hola'

const //no permiten cambio.
const esUnDatoQueNoCambia = 'FullStack';
//es un dato que no cambia = 'hola; //va a darerror


// Tipos de datos
// --------------


// console.log()
console.log(array); //solo para mirar en consol a un dato(iprime en pantalla)

// Ejecución con Node


// Operadores
// ----------


// Operadores Aritméticos
// 
let num1 = 10;
let num2 = 20;
let resultado = num1 + num2;
//Modulo: nos permite encontrar el resto de una division


console.log(num1 + num2);

// Operadores de comparación
// -------------------------
let menor = 3;
let mayor = 10;
console.log (menor !== mayor)


// triple igual evalua el tipo de dato (mas estricto) , el doble o simple solo compara el valor.
// Operadores lógicos
// ------------------

// Condicionales
// ------------------

// Bucles
// ------

// For
// ---
for (let i = 0; i < 8; i++){
    
    //do while
    let numeros =[2,3,4,5,6,7,8,9,3,5]
    let i = 0;
    do { 
        console.log(numeros[i]);
        if (numeros [i] === 5){
            console.log('Se encontro un 5! enla posicion' + i);
            break;
        }
        i++;
    }while (i < numeros.length)
}

// Funciones
// ---------
//return vs console.log();
//scopes de variables
//let y const
let nombre = 'stefano';

function saludar(){
    let nombre = 'Santiago'
    return nombre;
}
console.log(nombre);
console.log(saludar());