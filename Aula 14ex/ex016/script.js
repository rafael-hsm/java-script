function contar() {
    //buscando as variáveis pela árvore DOM do HTML
    var res = document.getElementById('res')
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        //Conversão de string para números
        res.innerHTML = "Contando... <br>"
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for(var c = i; c <= f; c+= p) {
                res.innerHTML += `${c} 👉 `
            }
        } else {
            //Contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉 `
            }
        }
        res.innerHTML += ` 🏁 `
    }    
}