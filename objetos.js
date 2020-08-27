//declaração de objeto vazio
let pessoa1 = {} //metodo "moderno"
let pessoa2 = new Object() // metodo "tradicional"

//declarando e inicializando um objeto já com propriedades

let pessoa3 = {
nome:"João das Couves",
naturalidade: 'Franca/SP',
"data de nacimento": '1997-11-03',
estudante_fatec: true
}

//Acessando uma propriedade de um objeto
//Atributo é uma única palavra -> sintaxe do ponto

console.log(pessoa3.nome)
console.log(pessoa3.estudante_fatec)

//Acessando uma propriedade composta por várias palavras ->
// sintaxe dos colchetes
console.log(pessoa3['data de nascimento'])

// Sintaxe dos colchetes SEMPRE FUNCIONA, mesmo com propriedades
//cujo nome é uma única palavra
console.log(pessoa3['naturalidade'])

let atrib = 'nome'
console.log(pessoa3[atrib])

//Criando novas propriedades em um objeto
pessoa3.nascionalidade = 'portuguesa'
pessoa3['reistro de estrangeiro']= 123456789

console.log(pessoa3)

//Eliminando uma propriedade
delete pessoa3.estudante_fatec

console.log('---------------------')

console.log(pessoa3)

// Como percorrer todas as propriedades de um objeto: for..in
for(let prop in pessoa3){
    console.log(prop)
}
console.log('------------------')
//Listando atributo e valor de um objeto usando for..in
for(let atrib in pessoa3){
    console.log('Atributo:' + atrib + '; valor:' + pessoa3[atrib])
}
console.log('---------------------------')
for(let atrib in pessoa3){
    console.log(`Atributo: ${atrib}; valor:${pessoa3[atrib]} `)
}