import express from 'express';
import https from 'https';
import fs from 'fs';
import cors from 'cors';
import { setupRoutes } from './routes/sorveteRoutes';
import React, { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';
import axios from 'axios';

// Observer: BehaviorSubject para gerenciar o estado dos sorvetes
const sorvetes$ = new BehaviorSubject([]);

// View: Componente React do Frontend
export default function SorveteriaApp() {
    const [sorvetes, setSorvetes] = useState([]);

    // Função para carregar sorvetes via REST
    const carregarSorvetes = async () => {
      try {
        // A comunicação é feita para a URL absoluta do servidor HTTPS
        const resposta = await axios.get('https://localhost/sorvetes');
        sorvetes$.next(resposta.data);
      } catch (error) {
        console.error("Erro ao carregar sorvetes:", error);
      }
    };

    useEffect(() => {
      const subscription = sorvetes$.subscribe(setSorvetes);
      carregarSorvetes();

      return () => subscription.unsubscribe(); // Limpa a inscrição ao desmontar
    }, []);

    return (
      <div className="p-4 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">🍨 Sorveteria Online</h1>
        <ul className="mt-4 space-y-2">
          {sorvetes.map((sorvete) => (
            <li key={sorvete.id} className="bg-white shadow rounded p-2">
              <strong>{sorvete.sabor}</strong> - R$ {sorvete.preco.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    );
}

// Backend: Configuração do servidor Express
const app = express();

// Configuração do SSL para comunicação criptografada (HTTPS)
const options = {
  key: fs.readFileSync('./cert/key.pem'),
  cert: fs.readFileSync('./cert/cert.pem')
};

// Middlewares
app.use(cors());
app.use(express.json()); // Habilita o parsing de JSON

// Rotas (conexão com o Controller)
setupRoutes(app);

// Criação do servidor HTTPS
const server = https.createServer(options, app);

// Exporta o servidor para ser iniciado por um script principal
export { server };