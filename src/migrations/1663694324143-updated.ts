import { MigrationInterface, QueryRunner } from "typeorm";

export class updated1663694324143 implements MigrationInterface {
    name = 'updated1663694324143'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "description"`);
    }

}
