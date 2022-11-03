import {Entity, model, property} from '@loopback/repository';
import { Prestamo } from './prestamo.model';
import { Usuario } from './usuario.model';

enum TipoNotificacion
    {
        Mail, //envia una notificacion por mail
        NoRecibir //No envia nada
    }

@model()

export class Notificacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ID?: number;

  @property({
    type: 'string',
  })
  Descripcion?: string;

  @property({
    type: 'date',
    required: true,
  })
  Fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  Hora: number;

  @property({
    type: 'object',
    required: true,
  })
  Tipo: TipoNotificacion;

  @property({
    type: 'object',
    required: true,
  })
  Usuario: Usuario;

  @property({
    type: 'object',
    required: true,
  })
  Prestamo: Prestamo;


  constructor(data?: Partial<Notificacion>) {
    super(data);
  }
}

export interface NotificacionRelations {
  // describe navigational properties here
}

export type NotificacionWithRelations = Notificacion & NotificacionRelations;
