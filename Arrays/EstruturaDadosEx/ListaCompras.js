// Exercício Fácil: Lista de Compras
// Objetivo: Criar uma lista de compras usando um array.

// Instruções:

// Crie um array vazio chamado listaDeCompras.
// Adicione os seguintes itens ao array: "Maçã", "Banana", "Leite", "Ovos".
// Remova o último item do array.
// Adicione "Pão" ao início do array.
// Imprima o array final no console.
// Dica: Use métodos como push, pop e unshift.

let listaCompras = [];
listaCompras.push("Maçã", "Banana", "Leite", "Ovos");
listaCompras.pop();
listaCompras.unshift("Pão");

console.log(listaCompras);
