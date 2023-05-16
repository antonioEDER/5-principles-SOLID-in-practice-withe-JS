const iMensagemToken = require('./iMensagemToken');

module.exports = class Mensageiro {

    constructor(iMensagemToken, canal, token) {
        this.token = token
        this.canal = canal
        this.setCanal(iMensagemToken)
    }

    enviarToken () {
        this.getCanal().enviar()
    }

    setCanal (canal) {
        return this.canal = canal
    }

    getCanal () {
        return this.canal
    }
}