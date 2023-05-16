const db = require("../DB");


const Icadastros = require("../interfaces/iCadastros");
const INotificacao = require("../interfaces/iNotificacao");
const iLog = require("../interfaces/iLog");

module.exports = class usuarioModel extends db implements Icadastros, INotificacao, iLog {
    salvar () { return }
    registrarLogs (logs:Logs()) {}
    enviarNotificacao (notificacao:Notificacao()) {}
}