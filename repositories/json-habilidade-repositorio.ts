// repositories/json-habilidade-repositorio.ts

import { HabilidadeRepository } from './habilidade-repository';
import { Habilidade } from '../model/habilidade-model';
import habilidadesData from '../db/seed/habilidades.json';

export class JsonHabilidadeRepositorio implements HabilidadeRepository {
  async findAll(): Promise<Habilidade[]> {
    return habilidadesData.habilidades;
  }
}
