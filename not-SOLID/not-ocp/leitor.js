const Arquivo = require('./arquivo.js')

module.exports = class Leitor {
    constructor(diretorio = '', arquivo = '') {
        this.diretorio = diretorio;
        this.arquivo = arquivo;
    }
    getDiretorio () {
        return this.diretorio
    }
    getArquivo () {
        return this.arquivo
    }
    setDiretorio (diretorio) {
        this.diretorio = diretorio
    }
    setArquivo (arquivo) {
        this.arquivo = arquivo
    }
    lerArquivo () {
        const caminho = `${this.getDiretorio()}${this.getArquivo()}`
        const arquivo = new Arquivo()
        const tipoArquivo = this.getArquivo().split('.')

        if (tipoArquivo[1] === 'txt') {
            arquivo.lerArquivoTXT(caminho)
        } else {
            arquivo.lerArquivoCSV(caminho)
        }

        console.log('tipoArquivo', tipoArquivo[1])
        console.log('arquivo.getDados()', arquivo.getDados())
    }
}
