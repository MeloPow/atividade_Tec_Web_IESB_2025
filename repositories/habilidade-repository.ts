// repositories/habilidade-repository.ts

import { Habilidade } from '../model/habilidade-model';

export interface HabilidadeRepository {
  findAll(): Promise<Habilidade[]>;
}
