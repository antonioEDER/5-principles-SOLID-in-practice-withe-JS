module.exports = class retangulo {

    constructor(largura, altura) {
        this.largura = largura
        this.altura = altura
    }

    setLargura (largura) {
        this.largura = largura
    }

    getLargura () {
        return this.largura
    }

    setAltura (altura) {
        this.altura = altura
    }

    getAltura () {
        return this.altura
    }

    getArea () {
        return this.getAltura() * this.getLargura()
    }

}