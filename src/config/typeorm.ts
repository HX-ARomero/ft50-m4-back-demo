import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
// import { Todo } from 'src/todos/todos.entity';
// import { User } from 'src/users/users.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
dotenvConfig({ path: '.development.env' });

const config = {
  type: 'postgres',
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  //* Configuración extra:
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  logging: false,
  synchronize: false,
  dropSchema: false,
};

export const typeOrmConfig = registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);