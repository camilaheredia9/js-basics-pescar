const btn = document.querySelector('.boton');
const imagen = document.querySelector('#dado');

btn.addEventListener(
    'click',
    function(){
        tirarDado();
    }
)

function tirarDado(){
    // obtengo numero aleatorio entre 1 y 6
    let numAleatorio = Math.round( (Math.random() * 5) + 1 );

    // coloco la imagen del dado correspondiente al numero obtenido
    imagen.src = `../imgs/dados/dado${numAleatorio}.png`;
}