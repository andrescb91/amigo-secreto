// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let NumeroAmigos=1;
let listaAmigos=[];
function agregarAmigo(){
    let amigo=document.getElementById("amigo");
    let lista=document.getElementById("listaAmigos");
    lista.innerHTML+=`<li id="friend_${NumeroAmigos}">${amigo.value}</li>`;
    listaAmigos.push(amigo.value);
    NumeroAmigos++;
}


function sortearAmigo(){
    let aleatorio=Math.trunc(Math.random()*listaAmigos.length);
    console.log(aleatorio)
    document.getElementById("resultado").innerHTML=`Tu amigo secreto es ${listaAmigos[aleatorio]}`
}


