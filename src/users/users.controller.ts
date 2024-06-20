import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';
import { User } from './users.repository';
import { AuthGuard } from 'src/guards/auth.guard';
import { DateAdderInterceptor } from 'src/interceptors/date-adder.interceptor';

//* /users
@Controller('users')
//@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(@Query('name') name: string) {
    if (name) {
      return this.usersService.getUserByName(name);
    }
    return this.usersService.getUsers();
  }

  //* /users/profile
  @Get('profile')
  getProfile(@Headers('token') token: string) {
    if (!token) return 'Se necesita un token';
    if (token !== 'TokenValido') return 'Token inválido, no tiene acceso';
    return 'Perfil del usuario';
  }

  //* /users/profile/images
  @Get('profile/images')
  getImages() {
    return 'Imágenes del perfil de usario';
  }

  //* /users/coffee
  @HttpCode(418)
  @Get('coffee')
  getCoffee() {
    return 'No hay café en esta ruta! Soy una tetera!';
  }

  @Get('message')
  getMessage(@Res() response: Response) {
    response.status(202).send('Petición aceptada. Este es el mensaje...');
  }

  @Get('request')
  getRequest(@Req() request: Request) {
    console.log(request);
    return 'Esta ruta imprime el request por consola';
  }

  //* /users/1001/Homero
  // @Get(':id/:name')
  // getUserById(@Param('id') id: string, @Param('name') name: string) {
  //   return `ID: ${id} - Usuario: ${name}`;
  // }
  //* /users/1001
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }

  @Post()
  @UseInterceptors(DateAdderInterceptor)
  createUser(@Body() user: User, @Req() request: Request & { now: string }) {
    const modifiedUser = { ...user, createdAt: request.now }
    return this.usersService.createUser(modifiedUser);
  }

  @Put()
  updateUser() {
    return 'Esta ruta modifica un usuario';
  }

  @Delete()
  deleteUser() {
    return 'Esta ruta elimina un usuario';
  }
}
