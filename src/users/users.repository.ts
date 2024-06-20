import { Injectable } from '@nestjs/common';

export interface User {
  id?: number;
  name: string;
  email: string;
  createdAt?: string;
}

//* BBDD
let users: User[] = [
  {
    id: 1001,
    name: 'Homero',
    email: 'homero@mail.com',
  },
  {
    id: 1002,
    name: 'Marge',
    email: 'marge@mail.com',
  },
  {
    id: 1003,
    name: 'Lisa',
    email: 'lisa@mail.com',
  },
];

@Injectable()
export class UsersRepository {
  async getUsers() {
    //* CONSULTAS A API EXTERNA O BBDD
    //* Código Asíncrono
    return await users;
  }

  async getUserById(id: number) {
    return await users.find((user) => user.id === id);
  }

  async getUserByName(name: string) {
    return await users.find((user) => user.name === name);
  }

  async createUser(user: User) {
    const id = users.length + 1001;
    // users = [...users, { id, ...user }];
    user.id = id;
    await users.push(user);
    return users;
  }
}
