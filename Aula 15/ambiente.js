let num = [5, 8, 2, 3]
num [3] = 6 //acrescentando número diretamente em uma posição.
num.push(7) //acrescentar valor no final
num.length //atributo para contar quantos elementos contém o vetor
num.sort() // método para organizar os valores. A ordem de colocação desse método altera o resultado. Organizar e depois inserir um número esse último não entrará já em ordem.

console.log(`Nosso vetor é composto pelos números ${num}.\nO vetor possui ${num.length} valores.\nO número na posição 2 é o ${num[1]}`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor 8 está na posição ${pos}.`)
}
