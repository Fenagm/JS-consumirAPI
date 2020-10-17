function obtenerPersonaje(nombre){
    const rpp = require("request-promise");
    var personaje ={
        uri: "https://rickandmortyapi.com/api/character/?name="+nombre,
        json:true
    }

    return rpp(personaje);
}

function obtenerNombreEpisodio(numero){
    const rpe = require("request-promise");
    var episodio ={
        uri: "https://rickandmortyapi.com/api/episode/?episode="+numero,
        json:true
    }
    return rpe(episodio);
}

obtenerPersonaje("morty").then(e => console.log("nombre:", `${e.results[0].name }`)) ;
//obtenerPersonaje("morty").then(e => console.log("nombre:",e.results)) ;
//obtenerEpisodio(1).then(e => console.log("EPISODIO 1:", `${JSON. stringify(e)}`)) ;
obtenerNombreEpisodio(2).then(e => console.log("EPISODIO 2:", `${e.results[0].name}`)) ;
//obtenerNombreEpisodio(2).then(e => console.log("EPISODIO 2:", e.results)) ;
