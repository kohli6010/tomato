import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    fname: string;

    @Column({nullable: true})
    lname?: string

    @Column()
    mobile: string;

    @Column({nullable: true})
    email?: string;

    @Column({type: "text"})
    password: string

    @Column({nullable: true})
    profilePhoto?: string;

    @Column({nullable: true})
    profileDescription?: string;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date;
}