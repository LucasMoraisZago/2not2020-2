class FormasGeometrica{
    constructor(b, a, t){
        this.base = b 
        this.altura = a
        this.tipo = t
    }
}

const retangulo = new FormasGeometrica(4,6.5, 'R')
const triangulo = new FormasGeometrica(4.2, 6.5, 'T')
const elipse = new FormasGeometrica(4, 6.5, 'E')

console.log(retangulo.base)
console.log(triangulo.base)
console.log(elipse.base)
