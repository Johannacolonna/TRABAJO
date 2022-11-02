

const formulario = document.getElementById("formulario");

function calculando (){ 
 const calculo = document.getElementById("calculo");
 const categoria = document.getElementById("categoria").value;
 const estudiante = document.getElementById("estudiante").value;
 const trainee = document.getElementById("trainee").value;
 const junior = document.getElementById("junior").value;
 const precio = 200;
 const cantidad = document.getElementById("cantidad").value;
 const resultado = (precio * cantidad);

if (categoria === estudiante){
       calculo.textContent = `total a pagar $ ${resultado * 0.15}`
    } 
   else if (categoria === trainee){
       calculo.textContent = `total a pagar $ ${resultado * 0.50}`
    }
    else if(categoria === junior){
       calculo.textContent = `total a pagar $ ${resultado * 0.85}`
    }}


const boton = document.getElementById("boton");

document.getElementById("boton").onclick = function (e){
    e.preventDefault();
    calculando();
}


function borrar(){
    document.getElementById(`formulario`).reset();
}
document.getElementById(`borrar`).onclick = function (e){
    e.preventDefault();
    borrar();
}

