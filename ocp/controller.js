const Leitor = require ('./leitor');

const leitor = new Leitor()

leitor.setArquivo('dados.xlsx')
leitor.setDiretorio('./files/')

leitor.lerArquivo()


