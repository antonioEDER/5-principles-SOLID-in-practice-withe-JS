const retangulo = require("../retangulo");

module.exports = class quadrado extends retangulo {
    setLargura (largura) {
        this.largura = largura
        this.altura = largura
    }
    
    setAltura (altura) {
        this.altura = altura
        this.largura = altura
    }

    setAltura (altura) {
        this.altura = altura
    }

    getAltura () {
        return this.altura
    }

}