import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Ejemplar} from '../models';
import {EjemplarRepository} from '../repositories';

export class EjemplarController {
  constructor(
    @repository(EjemplarRepository)
    public ejemplarRepository : EjemplarRepository,
  ) {}

  @post('/ejemplares')
  @response(200, {
    description: 'Ejemplar model instance',
    content: {'application/json': {schema: getModelSchemaRef(Ejemplar)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ejemplar, {
            title: 'NewEjemplar',
            exclude: ['ID'],
          }),
        },
      },
    })
    ejemplar: Omit<Ejemplar, 'ID'>,
  ): Promise<Ejemplar> {
    return this.ejemplarRepository.create(ejemplar);
  }

  @get('/ejemplares/count')
  @response(200, {
    description: 'Ejemplar model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Ejemplar) where?: Where<Ejemplar>,
  ): Promise<Count> {
    return this.ejemplarRepository.count(where);
  }

  @get('/ejemplares')
  @response(200, {
    description: 'Array of Ejemplar model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Ejemplar, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Ejemplar) filter?: Filter<Ejemplar>,
  ): Promise<Ejemplar[]> {
    return this.ejemplarRepository.find(filter);
  }

  @patch('/ejemplares')
  @response(200, {
    description: 'Ejemplar PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ejemplar, {partial: true}),
        },
      },
    })
    ejemplar: Ejemplar,
    @param.where(Ejemplar) where?: Where<Ejemplar>,
  ): Promise<Count> {
    return this.ejemplarRepository.updateAll(ejemplar, where);
  }

  @get('/ejemplares/{id}')
  @response(200, {
    description: 'Ejemplar model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Ejemplar, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Ejemplar, {exclude: 'where'}) filter?: FilterExcludingWhere<Ejemplar>
  ): Promise<Ejemplar> {
    return this.ejemplarRepository.findById(id, filter);
  }

  @patch('/ejemplares/{id}')
  @response(204, {
    description: 'Ejemplar PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ejemplar, {partial: true}),
        },
      },
    })
    ejemplar: Ejemplar,
  ): Promise<void> {
    await this.ejemplarRepository.updateById(id, ejemplar);
  }

  @put('/ejemplares/{id}')
  @response(204, {
    description: 'Ejemplar PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ejemplar: Ejemplar,
  ): Promise<void> {
    await this.ejemplarRepository.replaceById(id, ejemplar);
  }

  @del('/ejemplares/{id}')
  @response(204, {
    description: 'Ejemplar DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ejemplarRepository.deleteById(id);
  }
}
