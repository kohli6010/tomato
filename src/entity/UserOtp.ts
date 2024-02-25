import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, TableForeignKey, UpdateDateColumn } from "typeorm";
import { Customer } from "./Customer";
import { UserTypeEnums } from "../enums/UserEnums/UserTypeEnums";

@Entity()
export default class UserOtp{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    userId: number

    @Column()
    otp: string

    @Column({enum: UserTypeEnums})
    userType: UserTypeEnums;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}