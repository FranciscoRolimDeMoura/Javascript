let num = document.querySelector("input#nnum");
let lista = document.querySelector("select#seltab");
let res = document.querySelector("div#res");
let add = document.querySelector("input#adi");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  //indexOf retorna -1 se o valor (n) não for encontrado na lista
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    //window.alert(`Os valores são ${valores}`)
  } else {
    window.alert(`O valor ${num.value} é inválido ou já existe na Lista`);
  }
  num.value = "";
  num.focus();
}

function noBotao(event) {
  //var x = event.key
  //alert(`A tecla é ${x}`)
  if (event.key == "Enter") {
    add.focus();
  }
}

function resultado() {
    res.innerHTML = ""
    let n1 = valores.length
    res.innerHTML += `<p>Temos um total de ${n1} números adicionados <br></p>`;
    valores.sort(comparaNumeros)
    valores.reverse()
    let n2 = valores[0]
    res.innerHTML += `<p>O maior valor adicionado é ${n2}<br></p>`
    valores.sort(comparaNumeros);
    let n3 = valores[0];
    res.innerHTML += `<p>O menor valor adicionado é ${n3}<br></p>`;
    let n4 = valores.reduce((n4, currentElement) => n4 + currentElement)
    res.innerHTML += `<p>A soma dos valores adicionado é ${n4}<br></p>`;
    let n5 = n4 / n1
    res.innerHTML += `<p>A média dos valores é ${n5}<br></p>`;
    
    
}

function comparaNumeros(a, b) {
  if (a == b) return 0;
  if (a < b) return -1;
  if (a > b) return 1;
}

/* 
Outra forma de descobrir o menor e o maior valor
Número de elementos da tabela
Soma e media
SEM ORDENAÇÃO

let soma = 0
let media = 0
let tot = valores.length
let maior = valores[0]
let menor = valores[0]
for(let pos in valores) {
    soma += valores[pos]
    media = soma / tot
    if (valores[pos] > maior)
        maior = valores[pos]
    if (valores[pos] < menor)
        menor = valores[pos]
}
*/