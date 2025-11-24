# Lista de Livros Business 📚

[![Deploy](https://img.shields.io/badge/Demo-Online-D4AF37?style=for-the-badge)](https://arthurbrito1030.github.io/First_Project_Imers-oDev/)

## 🚀 Descrição do Projeto

**Lista de Livros Business:** Sua curadoria essencial para o sucesso. Mergulhe em desenvolvimento financeiro, hábitos e metodologias empreendedoras. O roadmap da sua evolução nos negócios!

Este projeto é uma aplicação web de catálogo que lista livros focados em finanças, empreendedorismo e desenvolvimento pessoal, permitindo que o usuário visualize e filtre rapidamente títulos relevantes.

## ✨ Funcionalidades

* **Curadoria Especializada:** Catálogo de mais de 30 títulos focados em temáticas como Psicologia Financeira, Hábitos Atômicos, Liderança e Metodologias Ágeis (como Scrum e OKR).
* **Busca Dinâmica:** Campo de pesquisa que filtra os livros em tempo real pelo `nome` (título) ou `descricao` (resumo).
* **Cards Interativos:** Cada livro é exibido em um card que contém o título, ano de publicação e descrição.
* **Links Diretos:** Acesso rápido ao link de compra ou mais informações de cada livro (ex: Amazon).
* **Design Profissional e Responsivo:** Layout no tema Dark Mode, otimizado para uma visualização agradável tanto em desktops quanto em dispositivos móveis.

## 💻 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias front-end e estrutura de dados:

| Tecnologia | Finalidade |
| :--- | :--- |
| **HTML5** | Estrutura semântica da página, incluindo o cabeçalho com busca e o rodapé. |
| **CSS3** | Estilização responsiva (media queries) e design moderno (Dark Mode com cores `var(--primary-color: #D4AF37)`). |
| **JavaScript (ES6+)** | Lógica de fetch de dados, manipulação do DOM e implementação da função de busca/filtro dinâmica. |
| **JSON** | Armazenamento de todo o conteúdo (dados dos livros) em um banco de dados local (`data.json`). |

## 📁 Estrutura do Projeto

O core do projeto é o arquivo `data.json`, que armazena as informações de cada livro no seguinte formato:


```json
[
  {
    "nome": "Psicologia Financeira",
    "descricao": "Um livro que explora como a psicologia influencia nossas decisões financeiras...",
    "ano": 2020,
    "link": "[https://www.amazon.com.br/](https://www.amazon.com.br/)..."
  },
]
