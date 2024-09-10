function bubbleSort(arr){
  let n = arr.length // armazena o comprimento do array 
  let trocado; // variável para verificar se houve troca na iteração 

  do {
   
   trocado = false; // define "trocado" como false no ínicio de iteração 

   for(i = 0 ; i < n - 1  ; i++){ // loop através do array até o penúltimo elemento 
    if(arr[i] > arr[i + 1]){
      //compara o elemento atual com o próximo
      // troca os elementos se estiverem na ordem errada

       let tempo = arr[i] // armazena o valor do elemento atual em uma variável temporária 

       arr[i] = arr[i + 1] // colocar o próximo elemento na posição atual 

       arr[i + 1] = tempo // coloca o valor do elemento atual na posição do próximo

       trocado = true // Define "trocado" como true , indicando que houve uma troca 
    }
   }

   n-- // diminui n , porque o maior elemento está no final e não precisa ser comparado novamente 

  } while (trocado);

  return arr; // retorna o array ordenado 
}

let array = [10 , 9 , 8 , 7  ] // 7 , 8 , 9 , 10 
console.log(bubbleSort(array))