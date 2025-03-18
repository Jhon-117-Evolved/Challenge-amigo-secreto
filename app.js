//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigo;
        listaAmigos.appendChild(novoAmigo);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para o sorteio.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const amigosEmbaralhados = [...amigos];
    for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]];
    }

    for (let i = 0; i < amigos.length; i++) {
        const amigoSecreto = (i === amigos.length - 1) ? amigosEmbaralhados[0] : amigosEmbaralhados[i + 1];
        const resultadoItem = document.createElement('li');
        resultadoItem.textContent = `${amigos[i]} tirou ${amigoSecreto}`;
        resultado.appendChild(resultadoItem);
    }
}