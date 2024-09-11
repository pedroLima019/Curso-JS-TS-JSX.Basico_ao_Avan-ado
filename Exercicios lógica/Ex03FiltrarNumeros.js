// Exercício 1: Filtrar números pares Crie 
//uma função que receba um array de números e utilize o método filter para retornar apenas os números pares.

function numPares(arr){
  return arr.filter((a) => a % 2 === 0)
}

let nums = [10 , 9 , 7 , 5 , 44 , 33]
console.log(numPares(nums)) 