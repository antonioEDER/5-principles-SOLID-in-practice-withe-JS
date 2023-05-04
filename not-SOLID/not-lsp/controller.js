const Retangulo = require ('./retangulo');
const Quadrado = require('./quadrado');


const retangulo = new Retangulo();
retangulo.setAltura(10);
retangulo.setLargura(10);
console.log('getArea =>', retangulo.getArea());

const quadrado = new Quadrado();
quadrado.setAltura(10);
quadrado.setLargura(8);

console.log('getArea =>', quadrado.getArea());