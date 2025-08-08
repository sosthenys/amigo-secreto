//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let listaUl = [];
let respostaAmigo = true;
let nome = "";
let nomeAmigo = "";
let conteLista = 0;

function    validarNome() {

   nomeAmigo = document.querySelector('input').value ;

   console.log(nomeAmigo)

    if (nomeAmigo == "") {

        alert ("Digite um nome e clique no botão Adicionar!");

        respostaAmigo = false;
        return respostaAmigo;
  
    }
}


function limparCampo() {
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = "";

}

function adicionarAmigo() {

    validarNome();


    if (respostaAmigo == false){
        return;
    }

    listaAmigos.push(nomeAmigo)

    conteLista = listaAmigos.length

    console.log(listaAmigos)

    exibirListaAmigos();

    limparCampo();
}

function sortearAmigo() {


    listaUl = document.getElementById("resultado");

    conteLista = listaAmigos.length;

    let amigoEscolhido = parseInt(Math.random() * (conteLista + 1));

    if (amigoEscolhido > 0){

        limparListaUl('resultado');

        limparListaUl('listaAmigos');

        console.log(`${amigoEscolhido}`)
        
        amigoEscolhido = listaAmigos[amigoEscolhido];

        const item = document.createElement("li");
        
        item.textContent = amigoEscolhido;
        
        listaUl.appendChild(item);

    }

}

function limparListaUl(id){

    const listaUl = document.getElementById(id);
        
    while (listaUl.hasChildNodes()) {
        listaUl.removeChild(listaUl.children[0]);
    }
}
    
    

function    exibirListaAmigos(){

    limparListaUl('listaAmigos');

    for (var i = 0; i < conteLista ;i++){

        listaUl = document.getElementById('listaAmigos');
        
        const item = document.createElement("li");
                
        item.textContent = listaAmigos[i];
                
        listaUl.appendChild(item);

    }
    
}