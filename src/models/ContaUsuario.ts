import { Endereco } from "./Endereco";

export interface ContaUsuario {
    exibirTipo(): void;
    nome: string;
    email: string;
    endereco?: Endereco;
};
