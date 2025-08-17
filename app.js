//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Declarações de variavreis
let listaAmigos = [];
let listaUl = [];
let respostaAmigo = true;
let nome = "";
let nomeAmigo = "";
let conteLista = 0;


// Verifica se o campo esta vazio, Exibe alerta se a variavél esta vazia e retorna uma resposta
function    validarNome() {

   nomeAmigo = document.querySelector('input').value ;

    if (nomeAmigo == "") {

        alert ("Digite um nome e clique no botão Adicionar!");

        respostaAmigo = false;
        return respostaAmigo;
  
    }
}

//Limpa o campo de preenchimento
function limparCampo() {
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = "";

}

//adiciona amigo na lista se o campo não for vazio
function adicionarAmigo() {

    validarNome();

    if (respostaAmigo == false){
        return;
    }

    listaAmigos.push(nomeAmigo)

    conteLista = listaAmigos.length

    exibirListaAmigos();

    limparCampo();
}

//Faz o sorteio do amigo secreto e manipula o HTML para inserir e limpaz tags se a lista não for vazia
function sortearAmigo() {


    listaUl = document.getElementById("resultado");

    conteLista = listaAmigos.length;

    let amigoEscolhido = parseInt(Math.random() * (conteLista + 1));

    if (amigoEscolhido < conteLista){

        limparListaUl('resultado');

        limparListaUl('listaAmigos');
           
        amigoEscolhido = listaAmigos[amigoEscolhido];

        const item = document.createElement("li");
            
        item.textContent = amigoEscolhido;
            
        listaUl.appendChild(item);
    }

}
//Limpa itens  da tag
function limparListaUl(id){

    const listaUl = document.getElementById(id);
        
    while (listaUl.hasChildNodes()) {
        listaUl.removeChild(listaUl.children[0]);
    }
}
    
    
//exibe na tela a lista de amigos enquanto contem itens na lista
function    exibirListaAmigos(){

    limparListaUl('listaAmigos');

    for (var i = 0; i < conteLista ;i++){

        listaUl = document.getElementById('listaAmigos');
        
        const item = document.createElement("li");
                
        item.textContent = listaAmigos[i];
                
        listaUl.appendChild(item);

    }
    
}