import { MigrationInterface, QueryRunner } from "typeorm";

export class Customers1708796623888 implements MigrationInterface {
    name = 'Customers1708796623888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer" ("id" SERIAL NOT NULL, "fname" character varying NOT NULL, "lname" character varying, "mobile" character varying NOT NULL, "email" character varying, "password" text NOT NULL, "profilePhoto" character varying, "profileDescription" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "customer"`);
    }

}
