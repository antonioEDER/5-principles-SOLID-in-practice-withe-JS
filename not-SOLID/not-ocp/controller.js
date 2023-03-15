const Leitor = require ('./leitor');

const leitor = new Leitor()

leitor.setArquivo('dados.csv')
leitor.setDiretorio('./files/')

leitor.lerArquivo()


