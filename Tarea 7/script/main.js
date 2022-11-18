var img = document.getElementById('NaveRickyMorty');
// Establecer el evento de clic (cuando se mueve el mouse) para lograr efectos dinámicos
document.onmousemove = function (e) {
    // Establece la posición de la imagen igual a la posición del mouse (puedes sumar o restar la distancia apropiadamente)
    img.style.left = e.pageX - 80 + 'px';
    img.style.top = e.pageY - 80 + 'px';
}

$(document).ready(function(){
    $("button").click(function(){
      $("#container-portals").toggle();
    });
  });

/* 
$(document).ready(function () {
    $(".btn1").click(function () {
        $(document.getElementById('container-portals')).hide();
    });
    $(".btn2").click(function () {
        $(document.getElementById('container-portals')).show();
    });
});
*/
//POO
//URL API
let base_url = 'https://rickandmortyapi.com/api/character';
//Lista personajes
let personajes = undefined;

//Clase personajes
class Personaje {
    //Constructor atributos
    constructor(Nombre, Especie, Imagen) {
        this.nombre = Nombre;
        this.especie = Especie;
        this.imagen = Imagen;
    }
    //Metodos
    //Getter
    get Info() {
        return `Personaje ${this.nombre}, especie ${this.especie} su imagen $(this.imagen)`;
    }
    //Setter
    set cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    set cambiarEspecie(nuevaEspecie) {
        this.especie = nuevaEspecie;
    }
    set carmbiarImagen(nuevaImagen) {
        this.imagen = nuevaImagen;
    }
}

// Petición al servidor de Rick y Morty para obtener los personajes
axios.get(base_url)
  .then(function (response) {
    // Funcionó
    // Mostrar el mensaje de alerta de exito
    personajes = response.data.results;
    console.log(personajes);
    personajes.map((item) => {
      let personaje = new Personaje(item.name,item.species,item.image)
      api.innerHTML += `<div class="container-img"><h1>${personaje.nombre}</h1><p>${personaje.especie}</p><img src="${personaje.imagen}"/></div>`;
    });
  })
  .catch(function (error) {
    // No funcionó
    // Mostrar el mensaje de alerta de error
    //console.log(error);

  })
  .then(function () {
    // Siempre se ejecuta
    // Mostrar el mensaje de alerta de cargando

  });

  // function show(params){
  //   insertar html
  // }
