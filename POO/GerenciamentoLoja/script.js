// Exercício de Projeto: Crie um pequeno sistema de gerenciamento de produtos para uma loja. Cada produto deve ser representado por um objeto contendo propriedades como nome, preco, quantidadeEstoque e um método vender(quantidade) que diminui a quantidade em estoque ao vender. O sistema deve ser capaz de:
// Adicionar novos produtos
// Atualizar o preço de um produto
// Verificar se um produto está disponível em estoque
// Vender um produto e diminuir o estoque

const loja = {
  produtos: [],

  // Método para adicionar novos produtos
  adicionarProdutos: function (nome, preco, quantidadeEstoque) {
    const novoProduto = {
      nome: nome,
      preco: preco,
      quantidadeEstoque: quantidadeEstoque,
      vender: function (quantidade) {
        if (quantidade > this.quantidadeEstoque) {
          console.log(`Estoque insuficiente !`);
        } else {
          this.quantidadeEstoque -= quantidade;
          console.log(
            `${quantidade} unidade(s) do produto${this.nome} vendida(s)`
          );
        }
      },

      disponivel: function () {
        return this.quantidadeEstoque > 0;
      },
    };

    this.produtos.push(novoProduto);
    console.log(`Produto ${nome} adicionando com sucesso!`);
  },

  // Métodos para atualizar o preço de um produto
  atualizarPreco: function (nome, novoPreco) {
    const produto = this.produtos.find((p) => p.nome === nome);
    if (produto) {
      produto.preco = novoPreco;
      console.log(`Preço do produto ${nome} atualizado para R$ ${novoPreco}`);
    } else {
      console.log(`Produto ${nome} não encontrado`);
    }
  },

  // método para verificar se um produto está disponível em estoque
  verificarEstoque: function (nome) {
    const produto = this.produtos.find((p) => p.nome === nome);
    if (produto) {
      if (produto.disponivel()) {
        console.log(
          `Produto ${nome} está disponível com ${produto.quantidade}`
        );
      } else {
        console.log(`Produto ${nome} está esgotado`);
      }
    } else {
      console.log(`Produto ${nome} não encontrado`);
    }
  },

  //método para verificar se um produto está disponível em estoque
  venderProduto: function (nome , quantidade) {
    const produto = this.produtos.find((p) => p.nome === nome);
    if (produto) {
      produto.vender(quantidade);
    } else {
      console.log(`Produto ${nome}  não encontrado`);
    }
  },
};

loja.adicionarProdutos("Camiseta", 50, 10);
loja.adicionarProdutos("Calça", 100, 5);
loja.atualizarPreco("Calça" , 150)
loja.venderProduto("Calça" , 2)
