import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migracion11718991237083 implements MigrationInterface {
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

