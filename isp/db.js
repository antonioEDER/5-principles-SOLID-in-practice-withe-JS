module.exports = class db {

    constructor(conexao) {
        this.conexao = conexao
    }

    conectar () {
        return this.conexao
    }
}