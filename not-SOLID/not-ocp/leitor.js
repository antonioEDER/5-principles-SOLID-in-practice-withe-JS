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

        arquivo.lerArquivoCSV(caminho)
        console.log('arquivo.getDados()', arquivo.getDados());
    }
}
