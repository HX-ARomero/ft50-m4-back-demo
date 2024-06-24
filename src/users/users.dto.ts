import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class UserBodyDto {
  //* Figura en la Entidad, pero NO se enviará por Body
  id?: string;
  createdAt?: string;

  //* Requerido:
  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(4, 10)
  password: string;
}