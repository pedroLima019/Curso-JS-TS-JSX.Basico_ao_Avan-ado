// Retorne a soma do dobro de todos os pares
// Filtrar pares
// Dobrar os valores
// Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 100];
const numerosPares = numeros
  .filter((a) => a % 2 === 0)
  .map((a) => a * 2)
  .reduce((a, b) => a + b, 0);

console.log(numerosPares);
