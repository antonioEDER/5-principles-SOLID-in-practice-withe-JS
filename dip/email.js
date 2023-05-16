module.exports = class Email implements iMensagemToken{

    constructor(conexao) {
        this.conexao = conexao
    }

    enviar () {
        return this.conexao
    }
}