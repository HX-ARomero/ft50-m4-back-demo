import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerGlobalMiddleware } from './middlewares/logger.middleware';
import { AuthGuard } from './guards/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(LoggerGlobalMiddleware);
  // app.useGlobalGuards(new AuthGuard());
  await app.listen(3000);
  console.log('Server listening on http://localhost:3000');
}
bootstrap();
