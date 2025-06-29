import { Sorvete } from '../models/Sorvete';

export class SorveteService {
  private sorvetes: Sorvete[] = [];

  listar(): Sorvete[] {
    return this.sorvetes;
  }

  adicionar(sorvete: Sorvete): void {
    this.sorvetes.push(sorvete);
  }
}