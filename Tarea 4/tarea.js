//Tarea numero 4.
//David Morales P. 19881480-6


//2.- Hacer las funciones necesarias para:
//Entrada: Array de numeros
//Salida: La suma de los numeros del array
//Función: Sumar los numeros de un array
function sumar( numeros ){
    let suma = 0;
    for ( let i in numeros){
        suma += numeros[i];
    }
    //console.log(suma);
    return suma;
};

//Entrada: Array de numeros
//Salida: Promedio de los numeros del array
//Funcion: Suma los numeros, calcula el largo del arreglo y divide la suma por el largo
function promedio( arreglo ){
    let n = arreglo.length;
    let total = sumar(arreglo);
    //console.log(total/n);
    return total/n;
}

var listadoNumeros = [6,8,9,2,5,10];
console.log(promedio(listadoNumeros));
