let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    //Verifica se o número está etra 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    //Verifica se o número já está cadastrado na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    //Teste se o valor é um número e se já está na lista
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        //'Push' para adicionar no array valores e 'Number' para converter em número
        valores.push(Number(num.value))
        //Adicionar item no select é necessário criar o 'option'
        let item = document.createElement('option')
        //Texto que será exibido no 'option' que foi adicionado ao select
        item.text = `Valor ${num.value} adicionado.`
        //Adicionando item na variável lista
        lista.appendChild(item)
        //Quando conseguir adicionar um número o resultado tem que ser limpo.
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    //Limpa o campo número após a adição ou não e mantém o campo selecionado.
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média é igual a ${media}</p>`
    }
}