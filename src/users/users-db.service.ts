import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersDbService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async create(user: any) {
    return await this.usersRepository.save(user);
  }

  async getUserById(id: string) {
    return await this.usersRepository.findOneBy({ id });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOneBy({ email });
  }
}
