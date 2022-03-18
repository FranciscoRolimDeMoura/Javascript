function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 13
    msg.innerHTML = `Agora são ${hora} hora(s)`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = 'rgb(198,180,136)'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#A57764' 
    } else
        img.src = 'noite.png'
        document.body.style.background = '#464748'
}