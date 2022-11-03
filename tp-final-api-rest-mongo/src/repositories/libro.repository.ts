import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceMongoDbDataSource} from '../datasources';
import {Libro, LibroRelations} from '../models';

export class LibroRepository extends DefaultCrudRepository<
  Libro,
  typeof Libro.prototype.ID,
  LibroRelations
> {
  constructor(
    @inject('datasources.DatasourceMongoDB') dataSource: DatasourceMongoDbDataSource,
  ) {
    super(Libro, dataSource);
  }
}
