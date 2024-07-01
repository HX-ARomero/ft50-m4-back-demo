import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  Headers,
  HttpCode,
  HttpException,
  HttpStatus,
  MaxFileSizeValidator,
  NotFoundException,
  Param,
  ParseFilePipe,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';
import { User } from './users.repository';
import { AuthGuard } from '../guards/auth.guard';
import { DateAdderInterceptor } from '../interceptors/date-adder.interceptor';
import { UsersDbService } from './users-db.service';
import { UserBodyDto, UsersSignInDto } from './users.dto';
import { CloudinaryService } from './cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { MinSizeValidatorPipe } from './minSizeValidator.pipe';
import { AuthService } from './auth.service';
import { Roles } from '../decorators/roles.decorator';
import { Role } from '../role.enum';
import { RolesGuard } from '../guards/roles.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

//* /users
@ApiTags('users')
@Controller('users')
//@UseGuards(AuthGuard)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly usersDbService: UsersDbService,
    private readonly cloudinaryService: CloudinaryService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getUsers(@Query('name') name: string) {
    if (name) {
      return this.usersService.getUserByName(name);
    }
    return this.usersService.getUsers();
  }

  @Get('dashboard')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  getAdmin() {
    return 'Este es el Panel de Administrador';
  }

  //* /users/profile
  @Get('profile')
  getProfile(@Headers('token') token: string) {
    if (!token) return 'Se necesita un token';
    if (token !== 'TokenValido') return 'Token inválido, no tiene acceso';
    return 'Perfil del usuario';
  }

  @ApiBearerAuth()
  @Get('profile/images')
  @UseGuards(AuthGuard)
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

  @Post('signup')
  @UseInterceptors(DateAdderInterceptor)
  createUser(
    @Body() user: UserBodyDto,
    @Req() request: Request & { now: string },
  ) {
    const modifiedUser = { ...user, createdAt: request.now };

    return this.authService.signUp(modifiedUser);
  }

  @Post('signin')
  async signIn(@Body() user: UsersSignInDto) {
    return this.authService.signIn(user.email, user.password);
  }

  @Post('profile/images')
  @UseInterceptors(FileInterceptor('image'))
  @UsePipes(MinSizeValidatorPipe)
  uploadProfilePic(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({
            fileType: /(jpg|jpeg|png|webp)/,
          }),
          new MaxFileSizeValidator({
            maxSize: 100000,
            message: 'El archivo debe ser menor a 100kb',
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.cloudinaryService.uploadImage(file);
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
