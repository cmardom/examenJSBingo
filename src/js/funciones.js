 function comparar(a, b) { return a - b; }

//Una función que genere todos los números del bingo (Desde el 1 al 90), que mezcle
//esas bolas y que las almacene en un arreglo. Este arreglo será devuelto por la función.
function generarNumeros(){
    //se resetea la variable para que no se añadan más números cuando se pulse más veces el botón
    numeros90=[];
    for(let i = 0; i<=90; i++){
        numeros90[i] = i;
    }
   
    numeros90 = _.shuffle(numeros90);
    console.log(numeros90)
    return numeros90;

    
}

// Una función que genere el cartón de bingo (24 números aleatorios de los 90).
function cogerNumeros(array90){
    for (let i = 0; i <= 24; i++){
        numeros24[i] = numeros90[i];
    }

    //otra versión:
    // numeros24 = numeros90.slice(0, 24);

    numeros24 = numeros24.sort(comparar);
    return numeros24;
}


function asignarSquares(){
    let square;
    for (let i = 0; i <= 23; i++){
        square = document.getElementById("square"+i);
        square.innerText=numeros24[i];
        squares[i] = square;
    }

    //activar botón jugar cuando se pinte el cartón
    botonStart.removeAttribute("disabled");

}


function sacarBola(){
    let contador=0;

    interval = setInterval(() => {
        bolas = _.shuffle(numeros90);
        let nuevasBolas = bolas;
        enJuego.bolas = nuevasBolas;
        enJuego.carton = numeros24;

        let pos = numeros24.indexOf(nuevasBolas[contador]);

        if (pos >= 0){
            squares[pos].classList.add('bg-info', 'text-white');
            contadorAcertadas.push(nuevasBolas[contador]);
        }

        contador++;

        enJuego.bolasPremiadas = contadorAcertadas;
        enJuego.bolasJugadas = nuevasBolas.slice(0, contador);



        //no se guardan los datos correctos!!
        guardarPartidaLocalStorage(enJuego);


        //condición para acabar
        if (contadorAcertadas.length >= 5) {
            resultado.innerText = "se han sacado " + contador + " bolas: " + contadorAcertadas;
            clearInterval(interval);
        }
    }, 100);
}


function consultarUsuario(){

    obtenerJugadores().then(resp=>{
        jugadores = resp;
        let jugador = jugadores.find((x) => x.nombre == inputUsuario.value);
        if (jugador){
            if (jugador.passwd === inputContrasena.value){
                guardarJugadorLocalStorage(jugador);

                //si inicia sesión correctamente:
                botonJugar.removeAttribute("disabled");
                botonCerrarSesion.hidden = false;
                inputUsuario.hidden = true;
                inputContrasena.hidden = true;
                botonConsultar.hidden = true;
                etqSaludo.innerText = "Hola, " + jugador.nombre;

            }
        }
    });




}


function cerrarSesion(){

    botonJugar.setAttribute("disabled", true);
    botonStart.setAttribute("disabled", true);
    botonCerrarSesion.hidden = true;
    inputUsuario.hidden = false;
    inputContrasena.hidden = false;
    botonConsultar.hidden = false;
    etqSaludo.innerText="";

    localStorage.removeItem('jugador');
    localStorage.removeItem('partida');

}

function guardarJugadorLocalStorage(jugador){
    localStorage.setItem('jugador', JSON.stringify(jugador));

}

function guardarPartidaLocalStorage(partida){
    localStorage.setItem('partida', JSON.stringify(partida));
}