// validar si es mayor de edad
function pedirDatos(){
    let edad = parseInt(prompt('ingrese su edad'));
    let mensaje;

    if (edad >= 18){
        alert('Eres mayor de edad, continuemos...');
        inicioSesion();
    } else {
        mensaje = 'Lo sentimos, eres menor de edad :(';
    }
    
    alert(mensaje);
}

//inicio se sesión
function inicioSesion(){
    // inicio de sesión
    let usuario = 'admin';
    let contraseña = 1234;
    let msj;

    let usuario2 = prompt('usuario:');
    let contraseña2 = parseInt(prompt('contraseña'));

    if (usuario2 === usuario && contraseña2 === contraseña){
        msj = 'Bienvenido usuario!!';
    } else{
        msj = 'Acceso denegado';
    }

    alert(msj);
}