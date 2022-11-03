import {Entity, model, property} from '@loopback/repository';
import { Libro } from './libro.model';
import { Prestamo } from './prestamo.model';

@model()
export class Ejemplar extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ID?: number;

  @property({
    type: 'object',
    required: true,
  })
  Libro: Libro;

  @property({
    type: 'array',
    itemType: 'object',
  })
  Prestamos?: Prestamo[];


  constructor(data?: Partial<Ejemplar>) {
    super(data);
  }
}

export interface EjemplarRelations {
  // describe navigational properties here
}

export type EjemplarWithRelations = Ejemplar & EjemplarRelations;
