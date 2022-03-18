function load() {
    var c = 1
    while (c <= 5) {
        document.write(`Contando: ${c} vez(es)<br>`)
        c++
    }

    for (c = 1; c <= 5; c++) {
        document.write(`Contando for: ${c} vez(es)<br>`)
    }
    execute()
}

function execute() {
    c--

    do {
        document.write(`Execute: ${c} vez(es)`)
        c--
    } while (c > 0)

    /*
    console.log('Tudo bem?')
    console.log('Tudo bem?')
    console.log('Tudo bem?')
    console.log('Tudo bem?')
    console.log('Tudo bem?')
    console.log('Tudo bem?')
    */
}