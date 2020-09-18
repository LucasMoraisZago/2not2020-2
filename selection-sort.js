function selectionSort(vetor) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0

    // Função que encontra p menor valor em um segmento de vetor (subvetor)
    // A função deve retornar A POSIÇÃO do menor valor encontrado
    function encontraMenor(vetor, inicio) {
    let posMenor = inicio
    for(let i = inicio + 1; i < vetor.length; i++) {
        if(vetor[i] < vetor[posMenor]) posMenor = i
        comparacoes++
    }
    return posMenor 
}

    // O for externo vai até a PENÚLTIMA posição
    for(i = 0; i < vetor.length - 1; i++) {
        passadas++

        // Busca-se o menor valor no restante do vetor
        posMenor = encontraMenor(vetor, i + 1)

        // Caso o valor encontrado seja menor que o valor atual,
        // procede-se a troca
        comparacoes++
        if(vetor[posMenor] < vetor[i]){
            // Permuta de valores usando desestruturação
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]]
            totalTrocas++
        }
    }
    console.log({passadas, comparacoes, totalTrocas})
}

const nums = [56, 78, 44, 23, 99, 14, 60, 37, 6, 82, 31, 65]

//console.log(encontraMenor(nums, 3)) // Retornar & (posição do valor 6)

console.time('nums')
selectionSort(nums)
console.timeEnd('nums')

console.log(nums)