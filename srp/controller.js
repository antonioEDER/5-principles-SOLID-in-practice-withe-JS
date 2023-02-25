import Order from "./order.js";
import Item from "./item.js";

// Instancia Item 01
const item1 = new Item()
// Adiciona Item 01
item1.setDescription('Sapato M')
item1.setAmount(10)

// Instancia Item 02
const item2 = new Item()
// Adiciona Item 02
item2.setDescription('Blusa M')
item2.setAmount(20.50)

// Instancia Pedido
const order = new Order()
// Adicionar Itens a lista do carrinho para o Pedido
order.getCart().addItem(item1)
order.getCart().addItem(item2)

// Exibir Itens a lista do carrinho
console.log('Itens', order.getCart().getItens());

// Exibir se carrinho Valido
console.log('He Valido', order.getCart().validCart());

// Exibir status do Pedido
console.log('Status', order.getStatus());

// Confirmar Pedido
order.confirmOrder()
// Exibir status do Pedido
console.log('Status', order.getStatus());




