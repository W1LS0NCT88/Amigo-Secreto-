// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaPersonas = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();
    let listaUl = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Ingrese un nombre válido");
    } else if (listaPersonas.indexOf(nombre) === -1) {
        listaPersonas.push(nombre);
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = nombre;
        listaUl.appendChild(nuevoLi);
    } 

    document.getElementById("amigo").value = "";
}
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

 let indiceSorteado = Math.floor(Math.random() * listaPersonas.length);
    let nombreSorteado = listaPersonas[indiceSorteado];

    let li = document.createElement("li");
    li.textContent = "El amigo secreto es: " + nombreSorteado;
    resultado.appendChild(li);

    
}




