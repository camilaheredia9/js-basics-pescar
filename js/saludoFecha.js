const $txt = document.getElementById('txt');
let fecha = new Date();
let diaSemana = fecha.getDay();

switch (diaSemana){
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Lunes';
        break;
    case 2:
        diaSemana = 'Martes';
        break;
    case 3:
        diaSemana = 'Miercoles';
        break;
    case 4:
        diaSemana = 'Jueves';
        break;
    case 5:
        diaSemana = 'Viernes';
        break;
    default:
        diaSemana = 'Sábado';        
}

function saludar(diaSemana){
    let mensaje = `Buen día, hoy es ${diaSemana}!!`;
    $txt.innerHTML = mensaje;
}