const formulario = document.querySelector('#formulario');

// ubico inputs con selector de atributo
const nombre = document.querySelector('input[name="nombre"]');
const email = document.querySelector('input[name="email"]');
const comentarios = document.querySelector('textarea[name="comentarios"]');

// spans para mensajes de validación
const txtNombre = document.querySelector('#txtNombre');
const txtEmail = document.querySelector('#txtEmail');
const txtComentarios = document.querySelector('#txtComentarios');

// función de validación
formulario.addEventListener(
    'submit',
    function(e){
        //evito envío de formulario
        e.preventDefault();
        //borramos mensajes de error
        borrarMensajes();
        //creo bandera
        let check = true;

        //valido dato en el campo nombre
        let datoNombre = nombre.value;
        if( checkVacio(datoNombre) ){
            check = false;
            txtNombre.innerText = 'Complete el campo Nombre';
        }

        //valido dato en el campo email REEVER!!!!!!!!!!!!!!!
        let datoEmail = email.value;
        if( !validarEmail(datoEmail) ){
            check = false;
            txtEmail.innerText = 'Complete el campo Email';
        }

        //valido campo comentarios
        let datoComentarios = comentarios.value;
        if( checkVacio(datoComentarios) || datoComentarios.length < 6 ){
            check = false;
            txtComentarios.innerText = 'Complete el campo Comentarios';
        }

        //chequeo valor de 'check'
        if( check ){
            //se envía el formulario
            formulario.submit(); 
        }
    }    
)

function checkVacio(dato){
    if( dato == "" || dato == null ){
        return true;
    } else{
        return false;
    }
}

function validarEmail (email) {
    let exp = /\S+@\S+\.\S+/;
    return exp.test(email);
}

// 'S' mayúscula viene de string = tiene que haber un string antes
// luego un @

function borrarMensajes(){
    txtNombre.innerText = "";
    txtEmail.innerText = "";
    txtComentarios.innerText = "";
}