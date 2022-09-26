// ubico etiqueta link que variará su href según modo claro u oscuro
const $hojaEstilos = document.querySelector('#modoPred');
// ubico a figure - disparador
const $switcher = document.querySelector('#switcher');
// ubico a las imágenes que deben cambiar según modo claro u oscuro
const $imgCircle = document.querySelector('#imgCircle');
const $imgStar = document.querySelector('#imgStar');

// bandera, modo predeterminado
let flag = 'light';

// evento del switcher
$switcher.addEventListener(
    'click',
    function(){
        cambiarModo();
    }
)

// función de cambio de modo
function cambiarModo(){
    if( flag == 'light' ){
        $hojaEstilos.href = '../css/dark.css';
        $imgCircle.src = '../imgs/dark.png';
        $imgStar.src = '../imgs/night-mode.png';
        flag = 'dark';
    } else{
        $hojaEstilos.href = '../css/light.css';
        $imgCircle.src = '../imgs/light.png';
        $imgStar.src = '../imgs/day-mode.png';
        flag = 'light';
    }
}