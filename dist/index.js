"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LegacyXMLSystem_1 = require("./services/LegacyXMLSystem");
const JsonToXMLAdapter_1 = require("./adapters/JsonToXMLAdapter");
const Credito_1 = require("./models/pagamentos/Credito");
const Debito_1 = require("./models/pagamentos/Debito");
const Pix_1 = require("./models/pagamentos/Pix");
const ContaFactory_1 = require("./factory/ContaFactory");
const Endereco_1 = require("./models/Endereco");
const ContaAdmin_1 = require("./models/ContaAdmin");
const ValidacaoUsuarioProxy_1 = require("./UsuarioProxy/ValidacaoUsuarioProxy");
// 1. Instância do sistema legado
const legacySystem = new LegacyXMLSystem_1.LegacyXMLSystem();
// 2. Instância do adapter
const adapter = new JsonToXMLAdapter_1.JsonToXmlAdapter(legacySystem);
// 3. Dados do cliente em JSON (simulando entrada do frontend)
const clienteJson = JSON.stringify({
    id: 1,
    nome: "Maria Oliveira",
    cpf: "987.654.321-00",
    dtNascimento: "1985-05-15",
    endereco: {
        rua: "Avenida Brasil",
        numero: 1500,
        cidade: "Rio de Janeiro",
        estado: "RJ",
        cep: "20000-000"
    },
    formaPagamento: {
        tipo: "pix" // Pode ser "credito", "debito" ou "pix"
    }
});
// 4. Função para testar diferentes formas de pagamento
function testarFormasPagamento() {
    const formas = [
        { tipo: "credito", instancia: new Credito_1.Credito() },
        { tipo: "debito", instancia: new Debito_1.Debito() },
        { tipo: "pix", instancia: new Pix_1.Pix() }
    ];
    formas.forEach(forma => {
        console.log(`\nTestando ${forma.tipo}:`);
        console.log(forma.instancia.processarPagamento(10.50));
    });
}
// 5. Execução principal
console.log("=== Sistema de Cadastro da Sorveteria ===");
try {
    // Processa o cadastro
    const usuarioCadastrado = adapter.processarCadastro(clienteJson);
    // Resultados
    console.log("\n✅ Cadastro realizado com sucesso!");
    console.log("Dados do usuário:", {
        id: usuarioCadastrado.id,
        nome: usuarioCadastrado.nome,
        cidade: usuarioCadastrado.endereco.cidade,
        formaPagamento: usuarioCadastrado.formaPagamento.constructor.name
    });
    // Testa o processamento de pagamento
    console.log("\n💳 Teste de formas de pagamento:");
    testarFormasPagamento();
}
catch (error) {
    console.error("\n❌ Erro no cadastro:", error instanceof Error ? error.message : error);
}
console.log("\n=== Fim da execução ===");
const conta1 = ContaFactory_1.ContaFactory.criarConta('admin', 'João', 'joao@admin.com');
const conta2 = ContaFactory_1.ContaFactory.criarConta('cliente', 'Maria', 'maria@cliente.com', new Endereco_1.Endereco('Rua A', 123, 'São Paulo', 'SP', '01000-000'));
//const conta3 = ContaFactory.criarConta('cliente', 'JOta', 'Jotaa@cliente.com');
const contaAdmin = new ContaAdmin_1.ContaAdmin("Administrador", "admin@email.com");
const proxy = new ValidacaoUsuarioProxy_1.ValidacaoUsuarioProxy(contaAdmin);
// Tentativa de acesso com credenciais válidas
proxy.acessarSistema("admin", "1234");
console.log(conta1);
conta1.exibirTipo();
console.log(conta2);
conta2.exibirTipo();
// Tentativa de acesso com credenciais inválidas
//proxy.acessarSistema("usuario", "senhaErrada");
