"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCliente = void 0;
class ContaCliente {
    constructor(nome, email, endereco) {
        this.nome = nome;
        this.email = email;
        this.endereco = endereco;
    }
    exibirTipo() {
        console.log('Conta Cliente');
    }
}
exports.ContaCliente = ContaCliente;
