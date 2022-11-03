import { Entity, model, property } from '@loopback/repository';
import { Notificacion } from './notificacion.model';
import { Prestamo } from './prestamo.model';

enum TipoUsuario {
  Administrador,
  Simple
}

enum TipoNotificacion {
  Mail, //envia una notificacion por mail
  NoRecibir //No envia nada
}

@model()
export class Usuario extends Entity {
  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  Prestamos: Prestamo[];

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  Notificaciones: Notificacion[];

  @property({
    type: 'number',
    required: true,
  })
  Puntos: number;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ID?: number;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Contrasenia: string;

  @property({
    type: 'string',
    required: true,
  })
  Mail: string;

  @property({
    type: 'object',
    required: true,
  })
  Tipo: TipoUsuario;

  @property({
    type: 'object',
    required: true,
  })
  TipoNotificacion: TipoNotificacion;


  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
