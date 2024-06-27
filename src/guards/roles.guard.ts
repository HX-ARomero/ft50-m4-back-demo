import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from 'src/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean {

    //* Obtener el "Rol" de la Ruta desde metadata:
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]); //* ['admin']

    //* Obtengo rol del usuario:
    const request = context.switchToHttp().getRequest();
    const user = request.user; //* = ['admin']

    //* Validar el Rol:
    const hasRole = () =>
      requiredRoles.some((role) => user?.roles?.includes(role));
    const valid = user && user.roles && hasRole(); //* true || false
    if (!valid)
      throw new ForbiddenException(
        'No tiene permisos para acceder a esta ruta',
      );

    return valid;
  }
}
