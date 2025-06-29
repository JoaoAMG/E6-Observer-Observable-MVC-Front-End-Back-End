"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonToXmlAdapter = void 0;
class JsonToXmlAdapter {
    constructor(legacySystem) {
        this.legacySystem = legacySystem;
    }
    processarCadastro(jsonData) {
        try {
            // 1. Parse e validação do JSON
            const usuarioData = this.parseAndValidate(jsonData);
            // 2. Conversão para XML
            const xmlData = this.convertToXml(usuarioData);
            // 3. Chamada síncrona ao sistema legado
            return this.legacySystem.processarCadastro(xmlData);
        }
        catch (error) {
            throw new Error(`Adaptação falhou: ${error.message}`);
        }
    }
    parseAndValidate(jsonData) {
        try {
            const data = JSON.parse(jsonData);
            // Validação básica
            if (!data.id || !data.nome || !data.endereco || !data.formaPagamento) {
                throw new Error("Dados incompletos no JSON");
            }
            return data;
        }
        catch (e) {
            throw new Error("JSON inválido");
        }
    }
    convertToXml(data) {
        // Implementação segura com escape de caracteres especiais
        const escapeXml = (unsafe) => {
            return unsafe.replace(/[<>&'"]/g, c => {
                switch (c) {
                    case '<': return '&lt;';
                    case '>': return '&gt;';
                    case '&': return '&amp;';
                    case '\'': return '&apos;';
                    case '"': return '&quot;';
                    default: return c;
                }
            });
        };
        return `
            <usuario>
                <id>${data.id}</id>
                <nome>${escapeXml(data.nome)}</nome>
                <cpf>${data.cpf || '000.000.000-00'}</cpf>
                <dtNascimento>${data.dtNascimento || new Date().toISOString()}</dtNascimento>
                <endereco>
                    <rua>${escapeXml(data.endereco.rua || '')}</rua>
                    <numero>${data.endereco.numero || 0}</numero>
                    <cidade>${escapeXml(data.endereco.cidade || '')}</cidade>
                    <estado>${escapeXml(data.endereco.estado || '')}</estado>
                    <cep>${data.endereco.cep || '00000-000'}</cep>
                </endereco>
                <formaPagamento tipo="${data.formaPagamento.tipo || 'credito'}"/>
            </usuario>
        `.replace(/\s+/g, ' ').trim(); // Remove quebras de linha
    }
}
exports.JsonToXmlAdapter = JsonToXmlAdapter;
