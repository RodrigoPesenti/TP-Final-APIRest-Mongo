import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceMongoDbDataSource} from '../datasources';
import {Usuario, UsuarioRelations} from '../models';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.ID,
  UsuarioRelations
> {
  constructor(
    @inject('datasources.DatasourceMongoDB') dataSource: DatasourceMongoDbDataSource,
  ) {
    super(Usuario, dataSource);
  }
}
