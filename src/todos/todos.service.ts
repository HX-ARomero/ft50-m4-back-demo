import { Inject, Injectable } from '@nestjs/common';
import { TodosRepository } from './todos.repository';
//import { LogMethod } from 'src/decorators/logMethod.decorator';
import { File } from './files.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodosService {
  constructor(
    @Inject('ACCESS_TOKEN') private readonly accessToken: string,
    private readonly todosRepository: TodosRepository,
    @InjectRepository(File) private readonly fileRepository: Repository<File>,
  ) {}

  // @LogMethod()
  getTodos() {
    return this.accessToken === 'ClaveSecreta'
      ? this.todosRepository.getTodos()
      : 'Clave Incorrecta, sin permiso';
  }

  saveFile(name: string, mimeType: string, data: Buffer): Promise<File> {
    const file = new File();
    file.name = name,
    file.mimeType = mimeType,
    file.data = data;

    return this.fileRepository.save(file);
  }
}
