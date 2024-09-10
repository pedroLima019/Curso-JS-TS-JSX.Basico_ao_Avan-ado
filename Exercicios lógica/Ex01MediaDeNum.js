// Exercício 1: Função para Calcular Média de Números
// Crie uma função chamada calcularMedia que recebe um array de números como parâmetro e retorna a média desses números.

function calcularMedia(arr){

 let soma = arr.reduce((a,b) => a + b)
 let media = soma / arr.length

 return media 
 
}

let array = [7 , 5 , 6]
console.log(calcularMedia(array))