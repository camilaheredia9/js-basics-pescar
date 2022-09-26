const $txt = document.querySelector('#txt');
const $btn = document.getElementsByTagName('button');

for (let i= 0; i < $btn.length; i++){
    $btn[i].addEventListener(
        'click',
        function(){
            colocarP(this.innerText);
        }
    )
}

function colocarP(color){
    $txt.innerText = `El botón es de color: ${color}`;
    $txt.style.backgroundColor = color;
}