import { Inject, Injectable } from '@nestjs/common';
import { TodosRepository } from './todos.repository';
import { LogMethod } from 'src/decorators/logMethod.decorator';

@Injectable()
export class TodosService {
  constructor(
    @Inject('ACCESS_TOKEN') private readonly accessToken: string,
    private readonly todosRepository: TodosRepository,
  ) {}

  @LogMethod()
  getTodos() {
    return this.accessToken === 'ClaveSecreta'
      ? this.todosRepository.getTodos()
      : 'Clave Incorrecta, sin permiso';
  }
}
