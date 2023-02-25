module.exports = class Item {
    // Atributos
    constructor(description = "", amount = 0) {
        this.description = description;
        this.amount = amount;
    }

    // Métodos
    getDescription () {
        return this.description || ''
    }
    validItem () {
        if (!this.description || this.amount <= 0) {
            return false
        }
        return true
    }
    setDescription (description) {
       this.description = description
    }
    getAmount () {
        return this.amount || 0
    }
    setAmount (amount) {
        this.amount = amount
    }
};

