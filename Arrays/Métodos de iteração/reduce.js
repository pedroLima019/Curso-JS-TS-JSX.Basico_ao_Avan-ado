/* 
 - aplica uma função a um acumulador e a cada valor do array (da esquerda para a direita) para reduzir a um único valor) 
*/

const arr = [1, 2, 3];
const sum = arr.reduce((a, b) => a + b, 10);
console.log(sum);
