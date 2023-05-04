module.exports = class poligono {

    constructor(forma) {
        this.forma = forma
    }

    setForma (forma) {
        this.forma = forma
    }

    getForma () {
        return this.forma
    }

    getArea () {
        return this.forma.getAltura() * this.forma.getLargura()
    }

}