import { FormaPagamento } from "./FormaPagamento";

export class Pix implements FormaPagamento {
    processarPagamento(valor: number): string {
        return `Pagamento com PIX no valor de R$${valor.toFixed(2)} processado`;
    }
}