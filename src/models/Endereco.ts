export class Endereco {
    constructor(
        public rua: string,
        public numero: number,
        public cidade: string,
        public estado: string,
        public cep: string
    ) {}
}