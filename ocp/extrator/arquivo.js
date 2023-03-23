module.exports = class arquivo {
    constructor(dados = []) {
        this.dados = dados
    }

    validarDados (nome = '', cpf = '', email = '') {
        if (!nome || !cpf || !email) {
            return false
        }

        return true
    }
    setDados (nome = '', cpf = '', email = '') {
        if (!this.validarDados(nome, cpf, email)) return
        
        this.dados.push({
            nome,
            cpf,
            email
        })
    }
    getDados () {
        return this.dados
    }
}
