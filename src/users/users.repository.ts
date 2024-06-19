import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository {
  //* BBDD
  private users = [
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

  async getUsers() {
    //* CONSULTAS A API EXTERNA O BBDD
    //* Código Asíncrono
    return await this.users;
  }
}
