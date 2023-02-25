// - SRP - Single Responsibility Principle (Princípio da Responsabilidade Única).
// Uma classe deve ter apenas um motivo para mudar.

module.exports = class Cart {
    // Atributos
    constructor(itens = []) {
        this.itens = itens;
    }

    // Métodos
    getItens () {
        return this.itens
    }
    addItem (item = {}) {
        this.itens.push({
            item
        });
    }
    validCart () {
        return this.itens.length > 0
    }
}