export interface FormaPagamento {
    processarPagamento(valor: number): string;
}