// Exercício 2: Somar valores de um array 
// Crie uma função que receba um array de números e utilize o método reduce para retornar a soma de todos os elementos.

function somarValores(arr){
   return arr.reduce((a , b) => a + b, 0 )
}

const valoresSoma = [ 20, 33]
console.log(somarValores(valoresSoma)) // 98