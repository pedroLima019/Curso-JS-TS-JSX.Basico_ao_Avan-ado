function filtrarPares(){
 const numbers = [2, 4 ,5, 6 ,77 , 100]
 return numbers.filter((a) => a % 2 === 0)
}

console.log(filtrarPares())
