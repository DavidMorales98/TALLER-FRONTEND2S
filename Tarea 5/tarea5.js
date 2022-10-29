//Tarea numero 5.
//David Morales P. 19881480-6

//2.- Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.

let pokeones = [
    'Pikachu',
    'Charmander',
    'Bulbasaur',
    'Squirtle'
];

function mayusculas (arreglo){
    for (i in arreglo){
        arreglo[i].toUpperCase();
        console.log(arreglo[i])
    }
    return arreglo;
};

mayusculas(pokeones);