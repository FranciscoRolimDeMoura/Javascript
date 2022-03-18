let amigo = {
    nome: 'Francisco A.Rolim de Moura Jr',
    sexo: 'M',
    peso: 78.5,
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p
    }
}
console.log(typeof amigo)
console.log(amigo)
console.log(`${amigo.nome} tem inicialmente ${amigo.peso} kilos`)
amigo.engordar(2)
console.log(` e agora tem ${amigo.peso} kilos`)