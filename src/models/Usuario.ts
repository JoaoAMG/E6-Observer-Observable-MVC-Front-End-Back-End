import { Endereco } from "./Endereco";
import { FormaPagamento } from "./pagamentos/FormaPagamento";

export class Usuario {
    constructor(
        public id: number,
        public nome: string,
        public endereco: Endereco,
        public cpf: string,
        public dtNascimento: Date,
        public formaPagamento: FormaPagamento
    ) {}
}