// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let NumeroAmigos=1;
let listaAmigos=[];
function agregarAmigo(){

    let amigo=document.getElementById("amigo");
    if(validarNombreAmigo(amigo.value)){
        alert("El nombre contien caracteres especiales o Numeros");
        clearInput();
        return;
    }
    if(amigo.value==""){
        alert("Por favor, escriba un nombre");
        clearInput();
        return;
    }
    let lista=document.getElementById("listaAmigos");
    lista.innerHTML+=`<li id="friend_${NumeroAmigos}">${amigo.value}</li>`;
    listaAmigos.push(amigo.value);
    NumeroAmigos++;
    clearInput();
}
function validarNombreAmigo(nombreAmigo){
    // Expresión regular para verificar si contiene al menos un número
    let tieneNumero = /[0-9]/.test(nombreAmigo);
    
    console.log(tieneNumero)
    // Expresión regular para verificar si contiene al menos un carácter especial
    let tieneEspecial = /[^a-zA-Z0-9\s]/.test(nombreAmigo);
    console.log(tieneEspecial)
    // Verificar si ambos se encuentran en el string
    if(tieneNumero===true || tieneEspecial===true){
        return true;
    }else{
        return false;
    }
}
function clearInput(){
    amigo.value="";
    amigo.focus();
    document.getElementById("resultado").innerHTML="";
}

function sortearAmigo(){
    let aleatorio=Math.trunc(Math.random()*listaAmigos.length);
    console.log(aleatorio)
    document.getElementById("resultado").innerHTML=`Tu amigo secreto es ${listaAmigos[aleatorio]}`
}

function resetJuegoAS(){
    NumeroAmigos=1
    deleteElementsHtml();
    listaAmigos=[];
    clearInput()
}

function deleteElementsHtml(){
    for (let index=1;index<=listaAmigos.length;index++) {
        document.getElementById(`friend_${index}`).remove();   
    } 
}