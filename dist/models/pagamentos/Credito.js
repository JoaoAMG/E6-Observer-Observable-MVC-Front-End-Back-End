"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credito = void 0;
class Credito {
    processarPagamento(valor) {
        return `Pagamento com Crédito no valor de R$${valor.toFixed(2)} processado`;
    }
}
exports.Credito = Credito;
