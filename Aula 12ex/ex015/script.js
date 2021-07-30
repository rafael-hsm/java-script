function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente.`)
    } else {
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - fano.value
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10) {
                //Criança
                img.setAttribute('src', 'imagens/menino-min.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/moco-min.png')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'imagens/homem-min.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/senhor-min.png')
            } 
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                //Criança
                img.setAttribute('src', 'imagens/menina-min.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/moca-min.png')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', 'imagens/mulher-min.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/senhora-min.png')
            } 
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}