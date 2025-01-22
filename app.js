// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let numeroSorteo = 0;
let listaParticipantes = [];
let index = 0;

function mostrarElemento(id){
    let elemento = document.getElementById(id);

    elemento.style.display = 'block';
}

function ocultarElemento(id){
    let elemento = document.getElementById(id);

    elemento.style.display = 'none';
}

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;

    if(nombre==''){
        alert("Este campo esta vacio, por favor ingrese un nombre")
    }else{
        listaParticipantes.push(nombre);
    }   
    console.log(listaParticipantes);

    mostrarListaEnPantalla(listaParticipantes, "listaAmigos");

}

function mostrarListaEnPantalla(lista, elemento){
    let listaUl = document.getElementById(elemento);

    mostrarElemento(elemento);

    listaUl.innerHTML = '';

    lista.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listaUl.appendChild(li);
    });
}

function sortearAmigo(){

    if(listaParticipantes.length === 0){
        alert("No hay participantes, ingrese dos al menos primero, para participar");
    }
    else
    {
        index = parseInt(Math.random()*listaParticipantes.length)

        selecionado = listaParticipantes[index];

        let listaResultados = document.getElementById("resultado");

        console.log(selecionado);

        ocultarElemento("listaAmigos");

        const li = document.createElement('li');
        li.textContent = `El amigo secreto sorteado es: ${selecionado}`;
        listaResultados.appendChild(li);

    }

    

    

} 