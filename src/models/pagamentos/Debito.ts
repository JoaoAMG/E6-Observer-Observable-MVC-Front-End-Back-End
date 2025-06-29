import { FormaPagamento } from "./FormaPagamento";

export class Debito implements FormaPagamento {
    processarPagamento(valor: number): string {
        return `Pagamento com Débito no valor de R$${valor.toFixed(2)} processado`;
    }
}