import { Controller, Get, Param, Post, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodosService } from './todos.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

//* /todos
@Controller('todos')
export class TodosController {
  //* Inyectamos TodosService
  constructor(private readonly todosService: TodosService) {}

  @ApiTags('todos')
  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }

  @ApiTags('todos')
  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  getTodoById(@Param('id') id: number) {
    console.log({ id, type: typeof id });
    // if(typeof id === 'NaN') return 'No se ha recibido un número';
    return `Este es la tarea con id: ${id}`;
  }

  @ApiTags('todos')
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    await this.todosService.saveFile(
      file.originalname,
      file.mimetype,
      file.buffer,
    )
    return 'Archivo Guardado';
  }
}
