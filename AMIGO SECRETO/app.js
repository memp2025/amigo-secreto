const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const inputAmigo = document.getElementById('amigo');

let amigos = [];

function adicionarAmigo() {
  const nome = inputAmigo.value.trim();

  if (nome === '') {
    alert('Por favor, digite um nome válido!');
    return;
  }

  // Evita nomes repetidos
  if (amigos.includes(nome)) {
    alert('Este nome já foi adicionado!');
    inputAmigo.value = '';
    return;
  }

  amigos.push(nome);
  atualizarLista();
  inputAmigo.value = '';
  inputAmigo.focus();
}

function atualizarLista() {
  listaAmigos.innerHTML = '';
  amigos.forEach((amigo, index) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
  resultado.innerHTML = ''; // Limpa resultado ao atualizar lista
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Adicione pelo menos um amigo para sortear!');
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  resultado.innerHTML = `O amigo secreto é: <strong>${amigoSorteado}</strong>!`;
}

