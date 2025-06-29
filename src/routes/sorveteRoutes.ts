import { Express } from 'express';
import { SorveteService } from '../services/SorveteService';
import { Sorvete } from '../models/Sorvete';

export const setupRoutes = (app: Express) => {
  const sorveteService = new SorveteService();

  // Dados iniciais para teste
  sorveteService.adicionar('Chocolate', 5.50);
  sorveteService.adicionar('Morango', 5.00);
  sorveteService.adicionar('Baunilha', 4.50);

  // Rota para listar todos os sorvetes (GET /sorvetes)
  app.get('/sorvetes', (req, res) => {
    res.json(sorveteService.listar());
  });

  // Rota para buscar um sorvete por ID (GET /sorvetes/:id)
  app.get('/sorvetes/:id', (req, res) => {
    const sorvete = sorveteService.buscarPorId(parseInt(req.params.id));
    if (sorvete) {
      res.json(sorvete);
    } else {
      res.status(404).send('Sorvete não encontrado');
    }
  });

  // Rota para adicionar um novo sorvete (POST /sorvetes)
  app.post('/sorvetes', (req, res) => {
    const { sabor, preco } = req.body;
    const novoSorvete = sorveteService.adicionar(sabor, preco);
    res.status(201).json(novoSorvete);
  });

  // Rota para atualizar um sorvete (PUT /sorvetes/:id)
  app.put('/sorvetes/:id', (req, res) => {
    const sorvete = sorveteService.atualizar(parseInt(req.params.id), req.body);
    if (sorvete) {
        res.json(sorvete);
    } else {
        res.status(404).send('Sorvete não encontrado');
    }
  });

  // Rota para remover um sorvete (DELETE /sorvetes/:id)
  app.delete('/sorvetes/:id', (req, res) => {
    const success = sorveteService.remover(parseInt(req.params.id));
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).send('Sorvete não encontrado');
    }
  });
};