import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [UsersModule, TodosModule],
  controllers: [AppController],
  providers: [
    // {
    //   provide: 'APP_GUARD',
    //   useClass: AuthGuard
    // },
    AppService],
})
export class AppModule {}
