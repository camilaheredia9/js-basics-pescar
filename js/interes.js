const creditos = [
    {nombre: 'plan01', capital: 150000, plazo: 30, tasa: 0.15},
    {nombre: 'plan02', capital: 300000, plazo: 180, tasa: 0.1},
    {nombre: 'plan03', capital: 485000, plazo: 60, tasa: 0.23}
];

const creditosConInteres = [];

calcularInteres();

function calcularInteres(){
  for ( let i= 0; i < creditos.length; i++ ){
    let interes = (creditos[i].capital * creditos[i].plazo * creditos[i].tasa) / 100;
    creditosConInteres[i] = {
                              nombre: creditos[i].nombre,
                              capital: creditos[i].capital,
                              plazo: creditos[i].plazo,
                              tasa: creditos[i].tasa,
                              interes: interes
                            }
  }

  return creditosConInteres;
}