import { Inject, Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
  constructor (
    @Inject('API_USERS') private readonly apiUsers: any[],
    private readonly usersRepository: UsersRepository) {}

  async getUsers() {
    const DBusers = await this.usersRepository.getUsers();
    const users = [...this.apiUsers, ...DBusers]

    return users;
  }
}