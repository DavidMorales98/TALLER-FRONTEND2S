let base_url = 'https://pokeapi.co/api/v2/pokemon/';
let pokemones = undefined;

axios.get(base_url)
.then(function(response)
{
    pokemones = response.data.results;
    console.log(pokemones);
    document.getElementById('js-nombre1').innerHTML = pokemones[0].name;
    document.getElementById('js-nombre2').innerHTML = pokemones[1].name;
    document.getElementById('js-nombre3').innerHTML = pokemones[2].name;
    document.getElementById('js-nombre4').innerHTML = pokemones[3].name;
    document.getElementById('js-nombre5').innerHTML = pokemones[4].name;
    document.getElementById('js-nombre6').innerHTML = pokemones[5].name;
    document.getElementById('js-nombre7').innerHTML = pokemones[6].name;
    document.getElementById('js-nombre8').innerHTML = pokemones[7].name;
    document.getElementById('js-nombre9').innerHTML = pokemones[8].name;
    document.getElementById('js-nombre10').innerHTML = pokemones[9].name;

    document.getElementById('js-nombre11').innerHTML = pokemones[10].name;
    document.getElementById('js-nombre12').innerHTML = pokemones[11].name;
    document.getElementById('js-nombre13').innerHTML = pokemones[12].name;
    document.getElementById('js-nombre14').innerHTML = pokemones[13].name;
    document.getElementById('js-nombre15').innerHTML = pokemones[14].name;
    document.getElementById('js-nombre16').innerHTML = pokemones[15].name;
    document.getElementById('js-nombre17').innerHTML = pokemones[16].name;
    document.getElementById('js-nombre18').innerHTML = pokemones[17].name;
    document.getElementById('js-nombre19').innerHTML = pokemones[18].name;
    document.getElementById('js-nombre20').innerHTML = pokemones[19].name;
})
.catch(function(error){
    pokemones = 'No data';
})
.then(function(){

});