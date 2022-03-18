let num = [5, 6, 7, 8]
console.log(`Nosso vetor é o ${num}`)
num[4] = 9 //clocando na última posição
console.log(`Nosso vetor é o ${num}`)
num.push(2) //clocando na última posição
console.log(`Nosso vetor é o ${num}`)
let tamanho = num.length
console.log(`O número de elementos é ${tamanho}`)
console.log(`Nosso vetor em ordem é ${num.sort()}`) //ordem crescente

for (let pos = 0; pos < num.length; pos++) {
    console.log(`posição ${pos} possui o valor ${num[pos]}`)
}

for (let pos in num) {  //para cada posição (let) dentro (in) de num faça
    console.log(`Na posição ${pos} possui o valor ${num[pos]}`)
}

//Buscar posicao que encontrou o valor(7) no vetor
console.log(num.indexOf(7))
//Mostra -1 dizendo que não encontrou o valor(3) no vetor
console.log(num.indexOf(3))
