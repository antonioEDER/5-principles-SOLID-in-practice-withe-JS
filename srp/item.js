export default class Item {
    // Atributos
    constructor(description = "", amount = 0) {
        this.description = description;
        this.amount = amount;
    }

    // Métodos
    getDescription () {
        return this.description
    }
    setDescription (description) {
       this.description = description
    }
    getAmount () {
        return this.amount
    }
    setAmount (amount) {
        this.amount = amount
    }
}