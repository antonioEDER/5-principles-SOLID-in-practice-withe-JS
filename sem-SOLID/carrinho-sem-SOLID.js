// - SRP - Single Responsibility Principle (Princípio da Responsabilidade Única).
// Uma classe deve ter apenas um motivo para mudar.

class Carrinho {
    // Atributos
    constructor(itens = [], status = 'Aberto', valorTotal = 0){
    	this.itens=itens;
    	this.status=status;
    	this.valorTotal=valorTotal;
    }
    // Métodos
    exibirItens () {
        return this.itens;
    }
    adicionarItem (item = "", vlr = 0) {
        this.itens.push({
            item,
            vlr
        });
    }
    exibirValorTotal () {
        const mock = { vlr: 0 }
        if (!this.itens.length) return 0

        return this.itens.reduce((vl1 = mock, vl2 = mock) => vl1.vlr + vl2.vlr)
    }
    exibirStatus () {
        return this.status
    }
    confirmarPedido () {
        if (this.validarCarrinho()) {
            this.status = 'Confirmado'
            return true
        }
        return false
    }
    validarCarrinho () {
        return this.itens.length > 0
    }
}

const carrinho = new Carrinho();

carrinho.adicionarItem("Bicicleta", 10);
carrinho.adicionarItem("Geladeira", 25);

console.log(carrinho.exibirItens());
console.log(carrinho.exibirValorTotal());

if (carrinho.confirmarPedido()) {
    console.log(carrinho.exibirStatus());
} else {
  console.log("Erro: Carrinho vazio")
}