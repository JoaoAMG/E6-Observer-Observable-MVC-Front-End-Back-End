// src/services/SorveteService.ts

import { Sorvete } from '../models/Sorvete';

export class SorveteService {
  private sorvetes: Sorvete[] = [];
  private proximoId = 1;

  // Lista todos os sorvetes disponíveis
  listar(): Sorvete[] {
    return this.sorvetes;
  }

  // Adiciona um novo sorvete à lista
  adicionar(sabor: string, preco: number): Sorvete {
    const novoSorvete = new Sorvete(this.proximoId++, sabor, preco);
    this.sorvetes.push(novoSorvete);
    return novoSorvete;
  }

  // Busca um sorvete por ID
  buscarPorId(id: number): Sorvete | undefined {
    return this.sorvetes.find(s => s.id === id);
  }

  // Remove um sorvete pelo ID
  remover(id: number): boolean {
    const index = this.sorvetes.findIndex(s => s.id === id);
    if (index !== -1) {
      this.sorvetes.splice(index, 1);
      return true;
    }
    return false;
  }

  // Atualiza os dados de um sorvete
  atualizar(id: number, dados: Partial<Sorvete>): Sorvete | null {
    const sorvete = this.buscarPorId(id);
    if (!sorvete) return null;

    sorvete.sabor = dados.sabor ?? sorvete.sabor;
    sorvete.preco = dados.preco ?? sorvete.preco;
    return sorvete;
  }
}
