import { Controller, Get } from "@nestjs/common";
import { TodosService } from "./todos.service";

//* /todos
@Controller('todos')
export class TodosController {
  //* Inyectamos TodosService
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }
}