// Descrição: Escreva uma função que receba um array de números e retorne o maior número.
// Dica: Use um loop for para iterar pelo array.
// Exemplo: maiorNumero([1, 5, 3, 9, 2]) deve retornar 9.

function arrNum() {
  let arr = [32, 5, 70, 800, 500 , 1900];
  let maior = Math.max(...arr);
  return maior;
}

console.log(arrNum());
