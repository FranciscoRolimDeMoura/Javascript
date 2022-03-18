var agora = new Date()
var hora = agora.getHours()
if (hora > 5 && hora < 12) {
    console.log(`Bom dia ! A hora atual é: `, hora)
} else if (hora > 11 && hora < 19) {
    console.log(`Boa tarde ! A hora atual é: `, hora)
} else {
    console.log(`Boa noite ! A hora atual é: `, hora)
}
