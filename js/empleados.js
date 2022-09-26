// TERMINA Y VUELVE A PEDIR EL ROL

const $txt = document.querySelector('#txt');
const $tabla = document.querySelector('#tabla');
const $nombre = document.querySelector('#nombre');
const $apellido = document.querySelector('#apellido');
const $edad = document.querySelector('#edad');
const $btn = document.querySelector('#btn');

let empleados = [
                   {Nombre: 'Juan', Apellido: 'Pedro', Edad: 40},
                   {Nombre: 'Ana', Apellido: 'Garcia', Edad: 25},
                   {Nombre: 'Maria', Apellido: 'Zarate', Edad: 34}
                ]

let mensajeError = 'Ha habido un error, pregunte a su supervisor rol y contraseña correctas :(';

//pido rol
let rol = prompt('ingrese su rol');

//verifico rol
if ( (rol == 'admin') || (rol == 'recursos') ){
    //pido contraseña
    let clave = parseInt(prompt('ingrese su contraseña'));
    //verifico contraseña
    if (clave == 1234){
        //pido usuario
        let usuario = prompt('ingrese su nombre de usuario');

        //doy bienvenida
        $txt.innerHTML = `Hola ${usuario}, bienvenid@ a nuestra aplicación`;

        //invoco a la función que imprime tabla
        imprimirTabla();               
    } else{
        $txt.innerText = mensajeError;
    }
} else{
    $txt.innerText = mensajeError;
}

// función que imprime tabla
function imprimirTabla(){
    $tabla.innerHTML = '';
    $tabla.innerHTML += `<tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Edad</th>
                        </tr>`;
    
    for (let i= 0; i < empleados.length; i++){
        $tabla.innerHTML += `<tr>
                                <td>${empleados[i].Nombre}</td>
                                <td>${empleados[i].Apellido}</td>
                                <td>${empleados[i].Edad}</td>
                             </tr>`
    }
}

// agregar empleados a la tabla
$btn.addEventListener(
    'click',
    function(){
        agregarEmpleados();
    }
)

function agregarEmpleados(){
    empleados.push({
        Nombre : $nombre.value,
        Apellido : $apellido.value,
        Edad: $edad.value 
    });
    imprimirTabla();
}