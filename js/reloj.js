const txt = document.querySelector('#txt');

function reloj(){
    // creo un objeto fecha
    let fecha = new Date();
    // obtengo horas
    let horas = fecha.getHours();
    // obtengo minutos
    let minutos = dosDigitos(fecha.getMinutes());
    // obtengo segundos
    let segundos = dosDigitos(fecha.getSeconds());

    // imprimo en el span
    txt.innerText = `${horas}:${minutos}:${segundos}`;
}

function dosDigitos(tiempo){
    if( tiempo < 10 ){
        tiempo = `0${tiempo}`;
    }
    return tiempo;
}

// ejecuto la función reloj
reloj();

// actalización del reloj por seg
setInterval( reloj, 1000 );