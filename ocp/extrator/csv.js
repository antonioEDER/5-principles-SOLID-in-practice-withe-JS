const fs = require("fs");
const arquivo = require("./arquivo");

module.exports = class csv extends arquivo {
    lerArquivo (caminho) {
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