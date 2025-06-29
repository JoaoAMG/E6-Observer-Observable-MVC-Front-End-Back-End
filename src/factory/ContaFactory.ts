import { ContaUsuario } from '../models/ContaUsuario';
import { ContaAdmin } from '../models/ContaAdmin';
import { ContaCliente } from '../models/ContaCliente';
import { Endereco } from '../models/Endereco';

export class ContaFactory {
    static criarConta(tipo: string, nome: string, email: string, endereco?: any): ContaUsuario {
        switch (tipo.toLowerCase()) {
            case 'admin':
                return new ContaAdmin(nome, email);
            case 'cliente':
                if (endereco === undefined) {
                    throw new Error('Endereço é obrigatório para conta cliente');
                }
                else {
                    return new ContaCliente(nome, email, endereco);
                }

            default:
                throw new Error('Tipo de conta desconhecido');
        }
    }
}