import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";

@Entity()
export class Customer{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({nullable: true})
    fname: string;

    @Column({nullable: true})
    lname?: string

    @Column()
    mobile: string;

    @Column({nullable: true})
    email?: string;

    @Column({nullable: true})
    profilePhoto?: string;

    @Column({nullable: true})
    profileDescription?: string;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date;
}