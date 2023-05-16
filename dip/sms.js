const iMensagemToken = require("./iMensagemToken")

module.exports = class Sms implements iMensagemToken{

    constructor(conexao) {
        this.conexao = conexao
    }

    enviar () {
        return this.conexao
    }
}