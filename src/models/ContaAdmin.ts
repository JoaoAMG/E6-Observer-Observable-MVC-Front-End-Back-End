import { ContaUsuario } from './ContaUsuario';
import { Endereco } from './Endereco';

export class ContaAdmin implements ContaUsuario {
    constructor(
        public nome: string,
        public email: string,
    ) { }

    exibirTipo(): void {
        console.log('Conta Administrador');
    }
}