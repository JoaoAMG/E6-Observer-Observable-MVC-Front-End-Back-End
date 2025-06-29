"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debito = void 0;
class Debito {
    processarPagamento(valor) {
        return `Pagamento com Débito no valor de R$${valor.toFixed(2)} processado`;
    }
}
exports.Debito = Debito;
