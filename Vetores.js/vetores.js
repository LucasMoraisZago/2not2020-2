let vetor1=[]// forma moderna
let vetor2 = Array() //forma tradicional 

//Criação de vetores com valores iniciais
let vetor3 = [2,4,6,8,10]
let vetor4 = Array('vaca', 'cachorro','gato','papagaio')

//inserção de valores em um vetor
//forma1: push()
vetor1.push("laranja")
vetor1.push("limão")

console.log(vetor1)

// forma 2: unshift()

vetor1.unshift('maçã')
console.log(vetor1)

vetor1.unshift("abacaxi")
console.log(vetor1)

//froma 3: splice()
/*1º paramentro: a posição de inserção
2º parametro: quantos elementos serão eliminados (para inserção ==0) */
vetor1.splice(2,0, 'morango')
console.log(vetor1)

vetor1.splice(1,0,"jaca")
console.log(vetor1)

//remoção de elementos do vetor

//forma 1:pop() remove do final

let x1 = vetor1.pop()
console.log(vetor1, x1)

//forma 2: shift() remove do inicio

let x2 = vetor1.shift()
console.log(vetor1, x2)

//forma 3: splice()
/* 1º parâmentro: a posiçãp para remoção
2º parâmentro: a quantidade de elementos a serem removidos */
let x3 = vetor1.splice(2,1)
console.log(vetor1,x3)

//o splice() também serve para fazer substituições
vetor1.splice(1,1,"pera")
console.log(vetor1)

//colocando mais alguns elementos no vetor
vetor1.push('amora',"jabuticaba")
vetor1.push('pêssego')
vetor1.push('uva')
vetor1.push('abacate')
console.log(vetor1)

//Métodos de percurso de vetores

//Forma 1: usando o for tradicional
/*O inicio da variavel é sempre na poisção 0 e seu incremento
deve ir até uma posição antes do seu número de elementos (length) */
for(let i = 0; i < vetor1.length; i++){
  console.log(vetor1[i])
}
console.log("----------------------")
//forma 2: for..of
for(let fruta of vetor1){
    console.log(fruta)
}

console.log("------------")

vetor1.forEach(fruta => console.log(fruta))

vetor1.forEach(function(fruta)
{
    console.log(fruta)
)}