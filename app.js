// Lista com todos os nomes adicionados
let amigos = [];

// Lista auxiliar com os nomes que ainda não foram sorteados
let amigosNaoSorteados = [];

// Adiciona o nome digitado à lista de amigos
function adicionarAmigo() {
  let campo = document.getElementById("nomeInput");
  let nome = campo.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);
  amigosNaoSorteados.push(nome); // Também adiciona na lista de sorteio

  campo.value = "";
  atualizarLista();
}

// Atualiza a lista de nomes no HTML
function atualizarLista() {
  let lista = document.getElementById("listaNomes");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

// Realiza o sorteio de um nome aleatório que ainda não foi sorteado
function sortearAmigo() {
  // Verifica se a lista original está vazia
  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear.");
    return;
  }

  // Se todos os nomes já foram sorteados, reinicia a lista
  if (amigosNaoSorteados.length === 0) {
    alert("Todos os nomes já foram sorteados!");
    amigosNaoSorteados = [...amigos]; // Cópia da lista original
  }

  // Sorteia um nome aleatório da lista de não sorteados
  let indice = Math.floor(Math.random() * amigosNaoSorteados.length);
  let nomeSorteado = amigosNaoSorteados.splice(indice, 1)[0]; // Remove e obtém o nome

  // Exibe o nome sorteado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Amigo Secreto: ${nomeSorteado}</li>`;
}
