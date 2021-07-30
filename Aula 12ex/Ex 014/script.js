function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} hora(s).`
    if (hora >= 0 && hora < 5) {
        //BOA MADRUGADA!
        img.src = 'imagens/madrugada.png'
        document.body.style.background = '#171d29'
    } else if (hora >=5 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#715c3b'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#fa5e02'
    } else {
        //BOA NOITE!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#002041'
    }
}