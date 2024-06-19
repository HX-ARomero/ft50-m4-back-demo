import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
import { UsersRepository } from './users.repository';

//* Servicio Falso
const usersMockService = {
  getUsers() {
    return [
      {
        id: 100001,
        name: 'Usuario Falso 01',
        email: 'falso@gmail.com',
      },
    ];
  },
};

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    // {
    //   provide: UsersService,
    //   useValue: usersMockService,
    // },
    UsersService,
    UsersRepository,
    {
      provide: 'API_USERS',
      useFactory: async () => {
        const apiUsers = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        ).then((result) => result.json());
        const cleanUsers = apiUsers.map((user: any) => {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        });
        return cleanUsers;
      },
    },
  ],
})
export class UsersModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(LoggerMiddleware).forRoutes('users');
  // }
}
