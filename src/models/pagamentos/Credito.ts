import { FormaPagamento } from "./FormaPagamento";

export class Credito implements FormaPagamento {
    processarPagamento(valor: number): string {
        return `Pagamento com Crédito no valor de R$${valor.toFixed(2)} processado`;
    }
}