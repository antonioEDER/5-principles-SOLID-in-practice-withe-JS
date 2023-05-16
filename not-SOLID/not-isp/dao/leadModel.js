const db = require("../DB");

const Icadastros = require("../interfaces/iCadastros");
const INotificacao = require("../interfaces/iNotificacao");

module.exports = class loadModel extends db implements Icadastros, INotificacao {
    salvar () { return }
    registrarLogs (logs:Logs()) {}
    enviarNotificacao (notificacao:Notificacao()) {}
}