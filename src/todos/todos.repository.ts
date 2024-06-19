import { Injectable } from "@nestjs/common";

@Injectable()
export class TodosRepository {
  //* BBDD
  private todos = [
    {
      id: 1,
      title: 'Tarea 01',
      description: 'Descripción Tarea 01',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Tarea 02',
      description: 'Descripción Tarea 02',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Tarea 03',
      description: 'Descripción Tarea 03',
      isCompleted: false,
    },
  ]

  async getTodos() {
    return await this.todos;
  }
}