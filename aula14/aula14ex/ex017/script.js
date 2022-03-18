function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Digite um numero:')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        while (c <= 10) {
            /* Equivale no HTML o comando abaixo:

            <select name="tabuada" id="seltab" size="10">
                <option value='v1'>Valor1</option>
                <option value='v2'>Valor2</option>
            </select> */

            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c} aqui` //tab é o nome do campo selecionado na tabela
            tab.appendChild(item)
            c++
        }
    }
}