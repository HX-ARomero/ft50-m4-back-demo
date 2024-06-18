import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  getTodos(): string {
    return 'Listado de todos';
  }
}
