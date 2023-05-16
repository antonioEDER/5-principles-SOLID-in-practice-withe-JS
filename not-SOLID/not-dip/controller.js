const Mensageiro = require ('./mensageiro');
const Email = require('./email');


const mensageiro = new Mensageiro();
console.log(mensageiro.setCanal('email'));
console.log(mensageiro.enviarToken('token12343'));


const mensageiro2 = new Mensageiro();
console.log(mensageiro2.setCanal('sms'));
console.log(mensageiro2.enviarToken('token12343'));