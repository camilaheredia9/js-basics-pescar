const $btn = document.querySelector('#btn');
const $txt = document.querySelector('#txt');

const flujoCaja = [
    {periodo: 'enero', ingreso: 1000, egreso: 1500},
    {periodo:'febrero', ingreso: 25400, egreso: 2500},
    {periodo:'marzo', ingreso: 8378, egreso: 1155},
    {periodo:'abril', ingreso: 1353, egreso: 1533},
    {periodo:'mayo', ingreso: 1535, egreso: 5434},
    {periodo:'junio', ingreso: 43354, egreso: 5434543},
    {periodo:'julio', ingreso: 3873, egreso: 348133},
    {periodo:'agosto', ingreso: 548653, egreso: 4543},
    {periodo:'septiembre', ingreso: 778951, egreso: 7816},
    {periodo:'octubre', ingreso: 1878, egreso: 95634},
    {periodo:'noviembre', ingreso: 4783, egreso: 9433},
    {periodo:'diciembre', ingreso: 38453, egreso: 9344},
];

$btn.addEventListener(
    'click',
    function(){
        calcularTotales();
    }
)

function calcularTotales(){
    let ganancias = 0;
    let perdidas = 0;

    //averiguo total ganancias y total perdidas
    for( let i= 0; i < flujoCaja.length; i++ ){
        ganancias += flujoCaja[i].ingreso;
        perdidas += flujoCaja[i].egreso;
    }
    calcularImprimirRdo(ganancias, perdidas);
}

function calcularImprimirRdo(gcias, perd){
    ( perd > gcias )
      ? $txt.innerText = `El flujo de caja genera Pérdidas.`
      : $txt.innerText = `El flujo de caja genera Ganancias.`;
}