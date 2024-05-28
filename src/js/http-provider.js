const obtenerJugadores = () => {
    let url = "http://localhost:3000/jugador";

    return fetch(url).then(resp => resp.json())

}