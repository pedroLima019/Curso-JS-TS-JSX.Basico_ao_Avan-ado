// Crie um objeto chamado livro com propriedades como titulo, autor, ano, e um método exibirInfo que exibe uma mensagem com essas informações.
const livro = {
  titulo: "Skate Salva",
  autor: "Pedro Lima",
  ano: 2023,
  exibirInfor: function () {
    return `${this.titulo} ${this.autor} ${this.ano}`;
  },
};
 
console.log(livro.exibirInfor())
