module.exports = class Email{

    constructor(conexao) {
        this.conexao = conexao
    }

    enviar () {
        return this.conexao
    }
}