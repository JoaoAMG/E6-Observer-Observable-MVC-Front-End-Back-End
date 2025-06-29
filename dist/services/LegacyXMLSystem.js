"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyXMLSystem = void 0;
const Usuario_1 = require("../models/Usuario");
const Endereco_1 = require("../models/Endereco");
const Credito_1 = require("../models/pagamentos/Credito");
class LegacyXMLSystem {
    processarCadastro(xmlData) {
        // Simulando parser de XML (na prática, use 'xml2js' ou similar)
        try {
            // Extração dos dados do XML (exemplo simplificado)
            const idMatch = xmlData.match(/<id>(\d+)<\/id>/);
            const nomeMatch = xmlData.match(/<nome>(.*?)<\/nome>/);
            if (!idMatch || !nomeMatch) {
                throw new Error("XML inválido");
            }
            // Crie e retorne um usuário (exemplo simplificado)
            return new Usuario_1.Usuario(parseInt(idMatch[1]), nomeMatch[1], new Endereco_1.Endereco("Rua", 0, "Cidade", "Estado", "00000-000"), // Substitua pelos valores reais
            "000.000.000-00", // Substitua pelo CPF do XML
            new Date(), // Substitua pela data do XML
            new Credito_1.Credito() // Substitua pela forma de pagamento do XML
            );
        }
        catch (error) {
            throw new Error(`Falha ao processar XML: ${error.message}`);
        }
    }
}
exports.LegacyXMLSystem = LegacyXMLSystem;
