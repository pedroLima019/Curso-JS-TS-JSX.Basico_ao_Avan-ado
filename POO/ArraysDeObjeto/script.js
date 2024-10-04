// Exercício: Crie uma lista de objetos chamada biblioteca. Cada objeto será um livro, com as propriedades: titulo, autor, anoPublicacao, e um método detalhes() que exibe as informações sobre o livro. Depois, percorra o array para exibir detalhes de todos os livros da biblioteca.

// Desafio: Adicione um novo método adicionarLivro(livro) para permitir adicionar novos livros ao array.

const biblioteca = {
  livros: [
    {
      titulo: "Hora de aventura",
      autor: "Reinaldo",
      ano: 1999,
      detalhes: function () {
        console.log(
          `titulo: ${this.titulo} autor: ${this.autor} ano: ${this.ano}`
        );
      },
    },

    {
      titulo: "Senhor dos áneis",
      autor: "Seila quem",
      ano: 2000,
      detalhes: function () {
        console.log(
          `titulo: ${this.titulo} autor: ${this.autor} ano: ${this.ano}`
        );
      },
    },
  ],

  adicionarLivro: function (livro) {
    this.livros.push(livro);
    console.log(`livro adicionado com sucesso !`);
  },

  exibirDetalhes: function () {
    this.livros.forEach(livro => livro.detalhes())
  },
};

const novoLivro = {
  titulo: "Novo mundo",
 autor: "chorão",
 ano: 2010,
 detalhes: function(){
   console.log(`titulo: ${this.titulo} autor: ${this.autor} ano: ${this.ano}`)
 }
}

biblioteca.adicionarLivro(novoLivro)
biblioteca.exibirDetalhes()