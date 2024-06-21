# Nest JS - Nest JS & TypeORM

[Volver a Inicio](../README.md)

## TypeORM

### Instalación

```bash
npm install @nestjs/typeorm @nestjs/config typeorm pg
```

## Migraciones

### Scripts

- En ARCHIVO "package.json":

```json
"scripts": {
	// ----- ----- ----- -----
	"typeorm": "ts-node ./node_modules/typeorm/cli",
	"migration:run": "npm run typeorm migration:run -- -d ./src/config/typeorm.ts",
	"migration:generate": "npm run typeorm -- -d ./src/config/typeorm.ts migration:generate",
	"migration:create": "npm run typeorm migration:create",
	"migration:revert": "npm run typeorm -- -d ./src/config/typeorm.ts migration:revert",
	"migration:show": "npm run typeorm -- -d ./src/config/typeorm.ts migration:show"
},
```

### Ejemplo de Migración

```ts
import { MigrationInterface, QueryRunner } from 'typeorm';

export class NameRefactor1712799620352 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "users" RENAME COLUMN "name" TO "fullname"',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "users" RENAME COLUMN "fullname" TO "name"',
    );
  }
}
```
