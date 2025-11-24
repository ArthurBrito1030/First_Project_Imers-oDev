let cardContainer = document.querySelector(".card-container");
let searchInput = document.querySelector("#campo-busca"); // Corrigido para corresponder ao ID do HTML
let dados = [];

async function iniciarBusca() {
  try {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
    searchInput.addEventListener("input", buscarLivros); // Adiciona o evento de busca
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
}

function buscarLivros() {
  const termoBusca = searchInput.value.toLowerCase();
  const livrosFiltrados = dados.filter(livro => 
    livro.nome.toLowerCase().includes(termoBusca) || 
    livro.descricao.toLowerCase().includes(termoBusca)
  );
  renderizarCards(livrosFiltrados);
}

function renderizarCards(dados) {
  cardContainer.innerHTML = ""; // Limpa o container antes de adicionar novos cards
  for (let livro of dados) {
    let article = document.createElement("article");
    article.classList.add("card");
    article.innerHTML = `
      <h2>${livro.nome}</h2>
      <p>${livro.ano}</p>
      <p>${livro.descricao}</p>
      <a href="${livro.link}" target="_blank">Acesse aqui</a>
    `;
    cardContainer.appendChild(article);
  }
}

// Inicia o carregamento dos livros assim que a página carregar
iniciarBusca();
