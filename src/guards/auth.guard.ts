import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

// function validateRequest(request: Request) {
//   //* Obtener el Token:
//   const token = request.headers['token'];
//   //* Validar Token
//   return token === 'TokenValido';
// }

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //* Acceder al Request dese el Contexto de Ejecución:
    const request = context.switchToHttp().getRequest();
    //* Acceder al Token
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) throw new UnauthorizedException('Se necesita un Token');

    try {
      const secret = process.env.JWT_SECRET;
      const payload = this.jwtService.verify(token, { secret });

      payload.iat = new Date(payload.iat * 1000); //* issued at
      payload.exp = new Date(payload.exp * 1000); //* expira en...

      payload.roles = ['admin', 'tester'];
      payload.isAdmin = true;

      console.log("payload: ", payload);

      return true;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
