// ubico cajas - escuderías
const redbull = document.querySelector('#redbull');
const ferrari = document.querySelector('#ferrari');
const mercedes = document.querySelector('#mercedes');
const mclaren = document.querySelector('#mclaren');

// ubico disparadores 'a'
const btnRedbull = document.querySelector('#btnRedbull');
const btnFerrari = document.querySelector('#btnFerrari');
const btnMercedes = document.querySelector('#btnMercedes');
const btnMclaren = document.querySelector('#btnMclaren');

// estado inicial : 3 de ellos OCULTOS
ferrari.style.display = 'none';
mercedes.style.display = 'none';
mclaren.style.display = 'none';

// eventos
btnRedbull.addEventListener(
    'click',
    function(){
        mostrarEscuderias(redbull);
    }
)

btnFerrari.addEventListener(
    'click',
    function(){
        mostrarEscuderias(ferrari);
    }
)

btnMercedes.addEventListener(
    'click',
    function(){
        mostrarEscuderias(mercedes);
    }
)

btnMclaren.addEventListener(
    'click',
    function(){
        mostrarEscuderias(mclaren);
    }
)

// función que oculta
function mostrarEscuderias(escuderia){
    redbull.style.display = 'none';
    ferrari.style.display = 'none';
    mercedes.style.display = 'none';
    mclaren.style.display = 'none';

    escuderia.style.display = 'flex';
}