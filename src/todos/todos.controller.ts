import { Controller, Get, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodosService } from './todos.service';

//* /todos
@Controller('todos')
export class TodosController {
  //* Inyectamos TodosService
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }

  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  getTodoById(@Param('id') id: number) {
    console.log({ id, type: typeof id });
    // if(typeof id === 'NaN') return 'No se ha recibido un número';
    return `Este es la tarea con id: ${id}`;
  }
}
