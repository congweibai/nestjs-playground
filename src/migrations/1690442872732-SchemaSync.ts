import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1690442872732 implements MigrationInterface {
  name = 'SchemaSync1690442872732';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "description" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "title" character varying NOT NULL`,
    );
  }
}
