const Retangulo = require ('./poligonos/retangulo');
// const Quadrado = require('./poligonos/quadrado');
const Poligonos = require('./poligonos');

const poligono = new Poligonos();
poligono.setForma(new Retangulo());

poligono.forma.setAltura(5)
poligono.forma.setLargura(10)


console.log('A Área é igual =>', poligono.getArea());

// const retangulo = new Retangulo();
// retangulo.setAltura(10);
// retangulo.setLargura(10);
// console.log('getArea =>', retangulo.getArea());

// const quadrado = new Quadrado();
// quadrado.setAltura(10);
// quadrado.setLargura(8);

// console.log('getArea =>', quadrado.getArea());