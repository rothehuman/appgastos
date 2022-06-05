var nombres = [];
var montos = [];
var total = 0;
var aPagar = 0.00;

function Calcular(){
    total = 0;
    aPagar = 0.00;
    for(let i = 0; i < montos.length; i++){
        total += parseFloat(montos[i]);
    }
    aPagar = parseFloat(total / montos.length).toFixed(2);
}

function Agregar(nombre, monto){
    nombres.push(nombre);
    montos.push(monto);
    Imprmir();
}

function BorrarUno(){
    let name = prompt("Ingrese nombre para borrar")
    let indice = nombres.indexOf(name);
    nombres.splice(indice, 1);
    montos.splice(indice, 1);
    Imprmir();

}

function Imprmir(){
    Calcular();
    let nuevo = document.getElementById("datos");
    nuevo.innerHTML = "";

    for(let i = 0; i < montos.length; i++){
        nuevo.innerHTML += `
        <div class="flex-item">
        <p>${nombres[i]} gastó: $${montos[i]}</p>
        </div>
        `;
    }
    
    var totalM = document.getElementById("total");
    totalM.innerHTML = `
    <div class="flex-item">
    <p>El total gastado fue: $${total}</p>
    <p>Cada uno debe pagar: $${aPagar}</p>
    </div>
    `;
}