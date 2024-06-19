import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodosRepository } from './todos.repository';

const ACCESS = 'ClaveSecreta';

@Module({
  imports: [],
  controllers: [TodosController],
  providers: [
    {
      provide: 'ACCESS_TOKEN',
      useValue: ACCESS,
    },
    TodosService,
    TodosRepository,
  ],
})
export class TodosModule {}
