let num = document.querySelector("input#nnum")
let tab = document.getElementById("seltab")
let r = document.querySelector("div#res")
console.log(`Nosso vetor é o ${tab}`);
function adicionar(n = document.getElementById("nnum")) {
  let num = Number(n.value);
  //document.write(num)

  if (n.value.length == 0 || n.value > 100) {
    alert("Não é possível analisar.");
  } else {
    for (let i = 0; i < tab.length; i++) {
        r.innerHTML = tab[i]
        if (tab[i] == n.value) {
            r.innerHTML = `Este valor já foi adicionado`
        }
    }
    let item = document.createElement("option");
    item.text = `Adicionou o número ${num}`;
    tab.appendChild(item);
  }
}

function resultado() {
    r1 = tab.length
    r.innerHTML = `Ao todo temos ${r1} números cadastrados.`
}
