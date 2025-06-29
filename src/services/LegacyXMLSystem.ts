import { Usuario } from "../models/Usuario";
import { Endereco } from "../models/Endereco";
import { Credito } from "../models/pagamentos/Credito";
import { Debito } from "../models/pagamentos/Debito";
import { Pix } from "../models/pagamentos/Pix";

export interface XMLService {
    processarCadastro(xmlData: string): Usuario;
}

export class LegacyXMLSystem implements XMLService {
    processarCadastro(xmlData: string): Usuario {
        // Simulando parser de XML (na prática, use 'xml2js' ou similar)
        try {
            // Extração dos dados do XML (exemplo simplificado)
            const idMatch = xmlData.match(/<id>(\d+)<\/id>/);
            const nomeMatch = xmlData.match(/<nome>(.*?)<\/nome>/);
            
            if (!idMatch || !nomeMatch) {
                throw new Error("XML inválido");
            }

            // Crie e retorne um usuário (exemplo simplificado)
            return new Usuario(
                parseInt(idMatch[1]),
                nomeMatch[1],
                new Endereco("Rua", 0, "Cidade", "Estado", "00000-000"), // Substitua pelos valores reais
                "000.000.000-00", // Substitua pelo CPF do XML
                new Date(), // Substitua pela data do XML
                new Credito() // Substitua pela forma de pagamento do XML
            );
        } catch (error) {
    throw new Error(`Falha ao processar XML: ${(error as Error).message}`);
}
    }
}
