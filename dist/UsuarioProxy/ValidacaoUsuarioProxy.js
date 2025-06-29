"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidacaoUsuarioProxy = void 0;
class ValidacaoUsuarioProxy {
    constructor(contaAdministrador) {
        this.contaAdministrador = contaAdministrador;
        this.usuariosValidos = new Map([
            ["admin", "1234"], // Usuário e senha válidos
            ["usuario", "senha123"],
        ]);
    }
    acessarSistema(nome, senha) {
        if (this.validarUsuario(nome, senha)) {
            console.log("Acesso permitido. Bem-vindo ao sistema!");
            this.contaAdministrador.exibirTipo();
        }
        else {
            console.log("Acesso negado. Nome ou senha inválidos.");
        }
    }
    validarUsuario(nome, senha) {
        return this.usuariosValidos.get(nome) === senha;
    }
}
exports.ValidacaoUsuarioProxy = ValidacaoUsuarioProxy;
