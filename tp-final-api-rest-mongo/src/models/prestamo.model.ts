import {Entity, model, property} from '@loopback/repository';
import { Ejemplar } from './ejemplar.model';
import { Usuario } from './usuario.model';

@model()
export class Prestamo extends Entity {
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
  Ejemplar: Ejemplar;

  @property({
    type: 'object',
    required: true,
  })
  Usuario: Usuario;

  @property({
    type: 'date',
    required: true,
  })
  FechaPrestamo: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaDevolucion: string;

  @property({
    type: 'date',
  })
  FechaDevuelto?: string;


  constructor(data?: Partial<Prestamo>) {
    super(data);
  }
}

export interface PrestamoRelations {
  // describe navigational properties here
}

export type PrestamoWithRelations = Prestamo & PrestamoRelations;
