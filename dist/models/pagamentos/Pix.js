"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pix = void 0;
class Pix {
    processarPagamento(valor) {
        return `Pagamento com PIX no valor de R$${valor.toFixed(2)} processado`;
    }
}
exports.Pix = Pix;
