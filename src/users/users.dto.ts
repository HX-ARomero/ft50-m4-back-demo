import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class UserBodyDto {

  @ApiHideProperty()
  id?: string;
  @ApiHideProperty()
  createdAt?: string;

  @ApiProperty({
    description: 'Propiedad name',
    example: 'Homero',
  })
  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  name: string;

  /**
   * Esta es la propiedad email
   * @example homero@mail.com
   */
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
   * Esta es la propiedad password
   * @example aaAA33##
   */
  @IsNotEmpty()
  @IsString()
  @Length(4, 10)
  password: string;
}

export class UsersSignInDto {
  /**
   * Esta es la propiedad email
   * @example homero@mail.com
   */
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
   * Esta es la propiedad password
   * @example aaAA33##
   */
  @IsNotEmpty()
  @IsString()
  @Length(4, 10)
  password: string;
}
