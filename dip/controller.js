const Mensageiro = require ('./mensageiro');
const Email = require('./email');
const Sms = require('./sms');




const mensageiro = new Mensageiro(new Email);
console.log(mensageiro.enviarToken());


const mensageiro2 = new Mensageiro(new Sms);
console.log(mensageiro2.enviarToken());