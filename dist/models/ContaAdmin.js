"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaAdmin = void 0;
class ContaAdmin {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    exibirTipo() {
        console.log('Conta Administrador');
    }
}
exports.ContaAdmin = ContaAdmin;
