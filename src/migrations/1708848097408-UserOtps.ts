import { MigrationInterface, QueryRunner } from "typeorm";

export class UserOtps1708848097408 implements MigrationInterface {
    name = 'UserOtps1708848097408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_otp" ("id" SERIAL NOT NULL, "otp" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "customerId" integer, CONSTRAINT "PK_494c022ed33e6ee19a2bbb11b22" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "fname" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_otp" ADD CONSTRAINT "FK_d4818f4232bada4f78c3cf551b3" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_otp" DROP CONSTRAINT "FK_d4818f4232bada4f78c3cf551b3"`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "fname" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "password" text NOT NULL`);
        await queryRunner.query(`DROP TABLE "user_otp"`);
    }

}
