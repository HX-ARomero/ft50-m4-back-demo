import { Inject, Injectable } from '@nestjs/common';
import { User, UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @Inject('API_USERS') private readonly apiUsers: any[],
    private readonly usersRepository: UsersRepository,
  ) {}

  async getUsers() {
    const DBusers = await this.usersRepository.getUsers();
    const users = [...this.apiUsers, ...DBusers];

    return users;
  }

  getUserById(id: number) {
    return this.usersRepository.getUserById(id);
  }

  getUserByName(name: string) {
    return this.usersRepository.getUserByName(name);
  }

  createUser(user: User) {
    return this.usersRepository.createUser(user);
  }
}
