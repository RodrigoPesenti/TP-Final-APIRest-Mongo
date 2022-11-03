import {Entity, model, property} from '@loopback/repository';
import { Ejemplar } from './ejemplar.model';

@model()
export class Libro extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ID?: number;

  @property({
    type: 'number',
    required: true,
  })
  ISBN: number;

  @property({
    type: 'array',
    itemType: 'object',
  })
  Ejemplares?: Ejemplar[];

  @property({
    type: 'string',
    required: true,
  })
  Titulo: string;

  @property({
    type: 'string',
    required: true,
  })
  Autor: string;


  constructor(data?: Partial<Libro>) {
    super(data);
  }
}

export interface LibroRelations {
  // describe navigational properties here
}

export type LibroWithRelations = Libro & LibroRelations;
