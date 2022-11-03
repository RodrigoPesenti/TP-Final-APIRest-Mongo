import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceMongoDbDataSource} from '../datasources';
import {Prestamo, PrestamoRelations} from '../models';

export class PrestamoRepository extends DefaultCrudRepository<
  Prestamo,
  typeof Prestamo.prototype.ID,
  PrestamoRelations
> {
  constructor(
    @inject('datasources.DatasourceMongoDB') dataSource: DatasourceMongoDbDataSource,
  ) {
    super(Prestamo, dataSource);
  }
}
