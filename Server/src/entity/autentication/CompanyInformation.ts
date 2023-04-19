import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne,JoinColumn } from "typeorm"

@Entity()
export class Company extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    companyName: string

    @Column()
    region: string

    @Column()
    city: string

    @Column()
    mainCategory: string

    @Column('simple-array', { nullable: true })
    mainProducts: string[]

    @Column('simple-array', { nullable: true })
    otherProducts: string[]

    @Column()
    yearCompanyRegistered: Date

    @Column()
    numOfEmployees: string

    @Column()
    websiteURL: string

    @Column()
    legalOwner: string

    @Column()
    companyAdvantages: string

    @Column('simple-array', { nullable: true })
    certificates: string[]

}
