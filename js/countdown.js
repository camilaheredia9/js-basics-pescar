const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');

function dosDigitos( tiempo ){
    if( tiempo < 10 ){
        tiempo = `0${tiempo}`;
    }
    return tiempo;
}

function cuentaRegresiva(){

    let ahora = new Date();
    let final = new Date( 2022, 11, 25 );

    //conversión a unix timestamp: tiempo transcurrido en     milisegundos desde el 1ero de enero de 1970
    let actual = ahora.getTime();
    let evento = final.getTime();

    //diferencia entre fechas
    let diferencia = evento - actual;

    //obtención del tiempo en segundos, minutos, horas y dias
    let segundos = Math.trunc( diferencia / 1000 );
    let minutos = Math.trunc( segundos / 60 );
    let horas = Math.trunc( minutos / 60 );
    let dias = Math.trunc( horas / 24 );

    //calculamos el tiempo sobrante para horas, minutos y segundos
    horas = horas % 24;
    minutos = minutos % 60;
    segundos = segundos % 60;

    //imprimo en el HTML
    txtDias.innerText = dosDigitos( dias );
    txtHoras.innerText = dosDigitos( horas );
    txtMinutos.innerText = dosDigitos( minutos );
    txtSegundos.innerText = dosDigitos( segundos );
}

cuentaRegresiva();
setInterval( cuentaRegresiva, 1000 );