"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaFactory = void 0;
const ContaAdmin_1 = require("../models/ContaAdmin");
const ContaCliente_1 = require("../models/ContaCliente");
class ContaFactory {
    static criarConta(tipo, nome, email, endereco) {
        switch (tipo.toLowerCase()) {
            case 'admin':
                return new ContaAdmin_1.ContaAdmin(nome, email);
            case 'cliente':
                if (endereco === undefined) {
                    throw new Error('Endereço é obrigatório para conta cliente');
                }
                else {
                    return new ContaCliente_1.ContaCliente(nome, email, endereco);
                }
            default:
                throw new Error('Tipo de conta desconhecido');
        }
    }
}
exports.ContaFactory = ContaFactory;
