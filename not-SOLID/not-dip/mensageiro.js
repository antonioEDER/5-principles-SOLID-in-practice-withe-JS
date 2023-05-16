module.exports = class Mensageiro {

    constructor(canal, token) {
        this.token = token
        this.canal = canal
    }

    enviarToken () {
        const classe = require(`./${this.canal}.js`);
        const obj = new classe

        obj.enviar()
    }

    setCanal (canal) {
        return this.canal = canal
    }
}