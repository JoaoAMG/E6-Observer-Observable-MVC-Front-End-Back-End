import { ContaUsuario } from './ContaUsuario';
import { Endereco } from './Endereco';

export class ContaCliente implements ContaUsuario {
    constructor(
        public nome: string,
        public email: string,
        public endereco: Endereco,
    ) { }

    exibirTipo(): void {
        console.log('Conta Cliente');
    }
}