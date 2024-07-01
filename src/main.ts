import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerGlobalMiddleware } from './middlewares/logger.middleware';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //* Configuración
  const swaggerConfig = new DocumentBuilder()
    .setTitle('NestJS Demo - FT50')
    .setDescription('Demo M4-Backend / API construída con NestJS')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build()
  //* Le indicamos a Swagger quién es nuestro Servidor
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  app.use(LoggerGlobalMiddleware);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      exceptionFactory: (errors) => {
        const cleanErrors = errors.map((error) => {
          return {
            property: error.property,
            constraints: error.constraints,
          };
        });
        return new BadRequestException({
          alert: 'Se han detectado errores',
          errors: cleanErrors,
        });
      },
    }),
  );
  await app.listen(3000);
  console.log('Server listening on http://localhost:3000');
}
bootstrap();
