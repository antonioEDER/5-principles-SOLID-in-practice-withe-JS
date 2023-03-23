const fs = require("fs");

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
    lerArquivoTXT (caminho) {
        const data = fs.readFileSync(caminho, 'utf8')
        try {
            const data = fs.readFileSync(caminho, 'utf8')
            const persons = data.split('\r\n')

            for (const person of persons) {
                const dados = person.split(',')
                const nome = dados[0]
                const cpf = dados[1]
                const email = dados[2]
                this.setDados(nome, cpf, email)
            }
          } catch (err) {
            console.error(err)
        }
    }
    lerArquivoCSV (caminho) {
        try {
            const data = fs.readFileSync(caminho, 'utf8')
            const persons = data.split('\r\n')

            for (const person of persons) {
                const dados = person.split(';')
                const nome = dados[0]
                const cpf = dados[1]
                const email = dados[2]
                this.setDados(nome, cpf, email)
            }
          } catch (err) {
            console.error(err)
        }
    }
}
