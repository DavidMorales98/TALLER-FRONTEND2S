//Tarea numero 5.
//David Morales P. 19881480-6

//1.- Secuencia de fibonacci
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

//a.- Entre los numeros 0 y 1000
for(let i = 0; i < 17; i++) {
        console.log(fibonacci(i));
}
//b.- Números pares entre 0 y 1000
for(let i = 0; i < 17; i++) {
    if (fibonacci(i)%2==0){
        console.log(fibonacci(i));
    }
}
//c.- Números impares entre 0 y 1000
for(let i = 0; i < 17; i++) {
    if (fibonacci(i)%2!=0){
        console.log(fibonacci(i));
    }
}
//2.- Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.

let pokeones = [
    'Pikachu',
    'Charmander',
    'Bulbasaur',
    'Squirtle'
];
//Entrada: Arreglo de strings
//Salida: Strings en mayusculas
//Funcion: Convierte los strings con minusculas a mayusculas
function mayusculas (arreglo){
    //Iterar arreglo
    for (let i in arreglo){
        //Almacenar en la misma posicion el string en mayuscula
        arreglo[i]=arreglo[i].toUpperCase();
    }
    //Retorno del arreglo actualizado
    return arreglo;
};

console.log(mayusculas(pokeones));

//3.- Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo fuego.
let pokemones = [
    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego'
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: ' Weedle', 
        tipo: 'Bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
]
//Entrada: Arreglo de pokemones
//Salida: Arreglo de pokemones tipo fuego
//Funcion: Seleciona los pokemones de tipo fuego
function tipoFuego (arreglo){
    //arreglo vacio
    let fuego = [];
    //iteracion de los elementos del arreglo
    for (let pokemon of arreglo){
        //condicional del enunciado
        if (pokemon.tipo === 'Fuego'){
            //almacenar en el arreglo vacio
            fuego.push(pokemon.nombre);
        }
    }
    //retorno del arreglo
    return fuego;
}
console.log(tipoFuego(pokemones));

//Mediante metodo filter
const pokemonesFuego = pokemones.filter(pokemon => pokemon.tipo === 'Fuego');
console.log(pokemonesFuego)