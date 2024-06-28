import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from '../middlewares/logger.middleware';
import { UsersRepository } from './users.repository';
import { UsersDbService } from './users-db.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { CloudinaryConfig } from '../config/cloudinary';
import { CloudinaryService } from './cloudinary.service';
import { AuthService } from './auth.service';

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
  imports: [TypeOrmModule.forFeature([User])],
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
    UsersDbService,
    CloudinaryConfig,
    CloudinaryService,
    AuthService,
  ],
})
export class UsersModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(LoggerMiddleware).forRoutes('users');
  // }
}
