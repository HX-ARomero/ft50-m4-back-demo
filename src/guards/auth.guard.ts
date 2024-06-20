import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

function validateRequest(request: Request) {
  //* Obtener el Token:
  const token = request.headers['token'];
  //* Validar Token
  return token === 'TokenValido';
}

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    //* Acceder al Request dese el Contexto de Ejecución:
    const request = context.switchToHttp().getRequest();
    //* Hacer Validación
    return validateRequest(request);
  }
}
