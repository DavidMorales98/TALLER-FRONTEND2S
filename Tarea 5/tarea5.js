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
    for (let i in arreglo){
        arreglo[i]=arreglo[i].toUpperCase();
        console.log(arreglo[i])
    }
    return arreglo;
};

mayusculas(pokeones);

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

function tipoFuego (arreglo){
    let fuego = [];
    for (let i in arreglo){
        if (arreglo[i].tipo === 'Fuego'){
            console.log(arreglo[i]);
            fuego.push(arreglo[i].nombre);
        }
    }
    return fuego;
}

tipoFuego(pokemones);