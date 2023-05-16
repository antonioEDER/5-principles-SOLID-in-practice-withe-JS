module.exports = class iMensagemToken{

    constructor(conexao) {
        this.conexao = conexao
    }

    enviarToken () {
        return this.conexao
    }
}