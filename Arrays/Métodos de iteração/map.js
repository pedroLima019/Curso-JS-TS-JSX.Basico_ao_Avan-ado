/*
 - cria um novo array com os resultados da chamada de uma função fornecida em cada elemento
 - o array original não é modificado 
 */

const arr = [ 1 , 2 , 3 ]
console.log(arr.map(e => e + 10))

const numDobro = [15 , 30 , 40 , 80]
console.log(numDobro.map(element => element * 2))