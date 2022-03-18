function contar() {
    let nini = document.getElementById('txti')
    let nfim = document.getElementById('txtf')
    let npas = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (nini.value.length == 0 && nfim.value.length == 0 && npas.value.length == 0) {
        res.innerHTML = '*** ERRO *** Não foi passado nenhum valor.'
    } else if (nini.value.length == 0) {
        res.innerHTML = '*** ERRO *** Informe o valor Inicial'
    } else if (nfim.value.length == 0) {
        res.innerHTML = '*** ERRO *** Informe o valor Final'
    } else if (npas.value.length == 0) {
        res.innerHTML = '*** ERRO *** Informe o valor do passo'
    } else {
        res.style.textAlign = 'center'
        res.innerHTML = 'Contando...'
        let i = Number(nini.value)
        let f = Number(nfim.value)
        let p = Number(npas.value)
        if (i < f) { 
            for (let c = i; c <= f; c = c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for (let c = i; c >= f; c = c -= p) {
                res.innerHTML += `${c} \u{1F449} `

            }
            res.innerHTML += `\u{1F3C1} `
        }
    }
}