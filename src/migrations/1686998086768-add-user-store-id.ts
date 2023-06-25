import { MigrationInterface, QueryRunner } from "typeorm"

export class AddUserStoreId1686998086768 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "store_id" character varying`);
        await queryRunner.query(`CREATE INDEX "UserStoreId" ON "user" ("1686998086768") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."UserStoreId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "1686998086768"`);
    }

}

