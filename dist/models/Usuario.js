"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(id, nome, endereco, cpf, dtNascimento, formaPagamento) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.cpf = cpf;
        this.dtNascimento = dtNascimento;
        this.formaPagamento = formaPagamento;
    }
}
exports.Usuario = Usuario;
