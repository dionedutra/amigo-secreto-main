//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let nome = inputAmigo.value.trim(); // Obtém o valor e remove espaços extras

  if (nome === "") {
    alert("Nome de amigo não informado!");
    inputAmigo.focus();
    return; // Sai da função se o nome estiver vazio
  }

  amigos.push(nome); // Armazena o valor (string), não o elemento

  let ul = document.getElementById("listaAmigos");
  ul.innerHTML = ""; // Limpa a lista antes de recriar

  for (let i = 0; i < amigos.length; i++) { // Loop correto com 'let' e '<'
    let li = document.createElement("li");
    li.textContent = amigos[i]; // Usa o valor diretamente (já é string)
    ul.appendChild(li);
  }

  inputAmigo.value = ""; // Limpa o campo
  inputAmigo.focus(); // Foco de volta ao input
}


let sorteado = "";

function sortearAmigo(){

  let indiceAmigo = Math.random() * amigos.length;
  let numeroAmigoInteiro = Math.trunc(indiceAmigo); //pega parte inteira do valor


  let ulResultdo = document.getElementById("resultado");
  ulResultdo.innerHTML = ""; // Limpa a lista antes de recriar

  let liResultado = document.createElement("li");
  liResultado.textContent = amigos[numeroAmigoInteiro]; // Exibe o nome de acordo com indece aleatorio sorteado
  ulResultdo.appendChild(liResultado);



  //console.log(numeroAmigoInteiro);
  //console.log("--------==----------==--------------");
  //console.log(amigos.length);

}