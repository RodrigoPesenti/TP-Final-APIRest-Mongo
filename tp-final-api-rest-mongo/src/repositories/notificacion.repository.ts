import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceMongoDbDataSource} from '../datasources';
import {Notificacion, NotificacionRelations} from '../models';

export class NotificacionRepository extends DefaultCrudRepository<
  Notificacion,
  typeof Notificacion.prototype.ID,
  NotificacionRelations
> {
  constructor(
    @inject('datasources.DatasourceMongoDB') dataSource: DatasourceMongoDbDataSource,
  ) {
    super(Notificacion, dataSource);
  }
}
