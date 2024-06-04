
let jugador = {
    id: 0,
    nombre: "",
    resultado: [],
};

function jugador_cargar(id, nombre, resultado) {
    jugador.id = id;
    jugador.nombre = nombre;
    jugador.resultado = resultado;
}

let enJuego = {
    //estos datos se van actualizando mientras se juega
    bolas: [],
    carton: [],
    bolasPremiadas: [],
    bolasJugadas: 0
}

//!!
function enJuego_reset() {
    // Reinicializar las propiedades a valores por defecto.
    enJuego.bolas = [];
    enJuego.carton = [];
    enJuego.bolasPremiadas = [];
    enJuego.bolasJugadas = 0;
    localStorage.removeItem('enJuego');
}