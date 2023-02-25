const Cart = require('./cart.js')

module.exports = class Order {
    // Atributos
    constructor(status = "Aberto", amountOrder = 0) {
        this.status = status;
        this.amountOrder = amountOrder
        this.cart = new Cart();
    }

    // Métodos
    getCart () {
        return this.cart
    }
    getStatus () {
        return this.status
    }
    setStatus (status) {
        this.status = status
    }
    confirmOrder () {
        if (this.cart.validCart()) {
            this.setStatus('Confirmado')
            return true
        }
        return false
    }
}