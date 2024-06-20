import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class DateAdderInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const now = new Date();
    const formatDate = now.toLocaleDateString('es-AR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    //* Acceder al Request desde el contexto de ejecución:
    const request = context.switchToHttp().getRequest();
    //* Asociar la nueva propiedad al request:
    request.now = formatDate;

    return next.handle();
  }
}
