import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceMongoDbDataSource} from '../datasources';
import {Ejemplar, EjemplarRelations} from '../models';

export class EjemplarRepository extends DefaultCrudRepository<
  Ejemplar,
  typeof Ejemplar.prototype.ID,
  EjemplarRelations
> {
  constructor(
    @inject('datasources.DatasourceMongoDB') dataSource: DatasourceMongoDbDataSource,
  ) {
    super(Ejemplar, dataSource);
  }
}
