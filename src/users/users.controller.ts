import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  ParseUUIDPipe,
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
import { UsersDbService } from './users-db.service';
import { UserBodyDto } from './users.dto';

//* /users
@Controller('users')
//@UseGuards(AuthGuard)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly usersDbService: UsersDbService,
  ) {}

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
  //* /users/uuid
  @Get(':id')
  async getUserById(@Param('id', ParseUUIDPipe) id: string) {
    const foundUser = await this.usersDbService.getUserById(id);
    // console.log(foundUser);
    if (!foundUser) throw new NotFoundException('Usuario no encontrado...');
    return foundUser;
  }

  @Post()
  @UseInterceptors(DateAdderInterceptor)
  createUser(
    @Body() user: UserBodyDto,
    @Req() request: Request & { now: string },
  ) {
    console.log('Body: ', request.body);
    console.log('user: ', user);
    const modifiedUser = { ...user, createdAt: request.now };
    return this.usersDbService.create(modifiedUser);
  }

  @Put()
  updateUser() {
    return 'Esta ruta modifica un usuario';
  }

  @Delete()
  deleteUser() {
    try {
      throw new Error('ERROR NO Manejado!!!');
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_IMPLEMENTED, //* 501
          error: 'Ruta No implementada',
        },
        HttpStatus.NOT_IMPLEMENTED, //* 501
      );
    }
    // return 'Esta ruta elimina un usuario';
  }
}
