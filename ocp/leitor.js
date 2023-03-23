// const Arquivo = require('./extrator/arquivo.js')

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
        const caminho = `${this.getDiretorio()}${this.getArquivo()}`;
        const extensao = this.getArquivo().split('.');
        const extrator = require(`./extrator/${extensao[1]}.js`);

        const arquivo = new extrator()        
        arquivo.lerArquivo(caminho)

        console.log('extensao', extensao[1])
        console.log('arquivo.getDados()', arquivo.getDados())
    }
}
