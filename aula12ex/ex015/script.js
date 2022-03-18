function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (parseInt(fano.value.length) == 0 || parseInt(fano.value) > ano) {
        window.alert('[ERRO!!!] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //Isto é a mesma coisa que escrever no HTML -> <img id="foto" src="" alt="">
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 04) {
                img.setAttribute('src', 'homem-bebe.png')
            } else if (idade < 12) {
                img.setAttribute('src', 'homem-menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem-homem.png')
            } else {
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 04) {
                img.setAttribute('src', 'mulher-bebe.png')
            } else if (idade < 12) {
                img.setAttribute('src', 'mulher-menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher-mulher.png')
            } else {
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} ano(s).`
        res.appendChild(img)
    }
}