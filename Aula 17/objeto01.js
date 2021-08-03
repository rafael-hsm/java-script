let amigo = {
    nome:'José', 
    sexo:'M', 
    peso:80.5,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
//alguns testes
amigo.engordar(6)
console.log(amigo.nome)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`)