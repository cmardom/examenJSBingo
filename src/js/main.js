let indice = 1,
    interval;


//Inicialización de bototes
const botonStart = document.getElementById('start');
const botonJugar = document.getElementById('botonPedirCarta');
const jugando = document.getElementById('jugando');
const resultado = document.getElementById('resultado');
const botonCerrarSesion = document.getElementById("botonCerrarSesion");
const botonConsultar = document.getElementById("botonConsultar");
const inputUsuario = document.getElementById("usuario");
const inputContrasena = document.getElementById("passwd");
const etqSaludo = document.getElementById("saludo");

//Variables globales (etiquetas y demás)
let numeros90 = [];
let numeros24 = [];
let bolas = [];
let bolasDesordenadas = [];
let squares = [];
let contadorAcertadas = [];
let jugadores = [];
let nuevasBolas = [];

//botones desactivados hasta que se inicia sesión
botonStart.setAttribute("disabled", "true");
botonJugar.setAttribute("disabled", "true");

//boton Cerrar Sesión oculto hasta que no se inicia sesión
botonCerrarSesion.hidden = true;



/******/
//Configuración de eventos (eventListeners)

botonJugar.addEventListener('click', ()=>{
    generarNumeros();
    cogerNumeros(numeros90);
    asignarSquares();
});

botonStart.addEventListener('click', ()=>
{
    //desactivar botón de pedir cartón cuando ya se ha empezado a jugar
    botonJugar.setAttribute("disabled", "true");
    sacarBola();
});

botonConsultar.addEventListener('click', ()=>{
    consultarUsuario();

});

botonCerrarSesion.addEventListener('click', () =>{
    cerrarSesion();
})


/****/
//Comprobación localStorage!!
//  1. Información de jugador (parte 2)

let jugadorGuardadoLocalStorage = localStorage.getItem('jugador');
if (!!jugadorGuardadoLocalStorage){
    jugador = JSON.parse(jugadorGuardadoLocalStorage);
    iniciarSesion(jugador);
}



//  2. Información de partida en juego (parte 3)
let partidaGuardadaLocalStorage = localStorage.getItem('partida');
if (!!partidaGuardadaLocalStorage){
    enJuego = JSON.parse(partidaGuardadaLocalStorage);

    nuevasBolas = enJuego.bolas;
    numeros24 = enJuego.carton;
    contadorAcertadas = enJuego.bolasPremiadas;

    asignarSquares();
    sacarBola();


} else {
}



