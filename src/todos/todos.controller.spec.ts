import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { Todo } from './todos.entity';

const mockTodo: Partial<Todo> = {
  title: 'Todo 01',
  description: 'Description 01',
};

let controller: TodosController;
let mockTodosService: Partial<TodosService>;

beforeEach(async () => {
  mockTodosService = {
    getTodos: (): Promise<Todo[]> =>
      Promise.resolve([{ ...mockTodo, id: 1, isCompleted: false } as Todo]),
  };

  const module: TestingModule = await Test.createTestingModule({
    controllers: [TodosController],
    providers: [
      {
        provide: TodosService,
        useValue: mockTodosService,
      },
    ],
  }).compile();

  controller = module.get<TodosController>(TodosController);
});

describe('TodosController', () => {
  it('Should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('getTodos() should return an array of todos', async () => {
    const todos = await controller.getTodos();
    expect(todos).toEqual([
      {
        id: 1,
        title: 'Todo 01',
        description: 'Description 01',
        isCompleted: false,
      },
    ]);
  });
});
