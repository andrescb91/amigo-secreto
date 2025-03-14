// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let NumeroAmigos=0;
let listaAmigos=[];
function agregarAmigo(){
    //obtenemos nombre digitado en el input
    let amigo=document.getElementById("amigo");
    //Realizamos las validaciones del input
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
    //NumeroAmigos lleva el conteo de los amigos agregados
    NumeroAmigos++;
    //traemos el elemento de lista.
    let lista=document.getElementById("listaAmigos");
    //agregamos items a la lista con el nombre del amigo 
    lista.innerHTML+=`<li id="friend_${NumeroAmigos}">${amigo.value}</li>`;
    //Guardamos en un array los nombre 
    listaAmigos.push(amigo.value);
    
    //Limpaimos el input y localizamos el cursor
    clearInput();
}

function validarNombreAmigo(nombreAmigo){
    // con la expresión regular se verificar si contiene al menos un número
    let tieneNumero = /[0-9]/.test(nombreAmigo);
    // con la expresión regular se verificar si contiene al menos un carácter especial
    let tieneEspecial = /[^a-zA-Z0-9\s]/.test(nombreAmigo);
    console.log(tieneEspecial)
    // se verifica si contiene caracteres especiales o numeros
    if(tieneNumero===true || tieneEspecial===true){
        return true;
    }else{
        return false;
    }
}

function clearInput(){
    //limpiar el input
    amigo.value="";
    //focalizamos el cursos en el input
    amigo.focus();
    //limpiamos la etiqueta <ul>, donde se imprime el resultado
    document.getElementById("resultado").innerHTML="";
}

function sortearAmigo(){
    if(NumeroAmigos<1){
        alert("Por favor añadir nombres")
        return;
    }
    //generamos un numero aleatorio desde 0 hasta el total de niños añadidos
    let aleatorio=Math.trunc(Math.random()*listaAmigos.length);
    //limpiamos el input enfocamos el cursor
    clearInput();
    //imprimos el amigo secreto, el numero generado se lo utilizamos con indice del array
    document.getElementById("resultado").innerHTML=`Tu amigo secreto es ${listaAmigos[aleatorio]}`
}

function resetJuegoAS(){
    if(NumeroAmigos<1){
        alert("Por favor añadir nombres")
        return;
    }
    //reiniciamos a los parametros iniciales las variables;
    NumeroAmigos=1
    deleteElementsHtml();
    listaAmigos=[];
    clearInput()
}

function deleteElementsHtml(){
    //realizamos iteraciones con for hasta el total de amigos escrito, para completar el nombre de id de <li>, asi eliminar los elementos agregados
    for (let index=1;index<=listaAmigos.length;index++) {
        document.getElementById(`friend_${index}`).remove();   
    } 
}