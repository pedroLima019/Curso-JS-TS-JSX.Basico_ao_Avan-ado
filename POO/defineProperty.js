function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Object.defineProperty(this, "estoque", {
  enumerable: true, // mostra a chave
  value: estoque, // valor
  writable: true, // pode ser alterado
  configurable: true, // configurável
});

const p1 = new Produto("camiseta", 20, 3);
console.log(Object.keys(p1));
