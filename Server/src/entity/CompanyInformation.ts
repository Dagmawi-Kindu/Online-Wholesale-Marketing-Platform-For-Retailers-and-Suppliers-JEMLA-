import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne,JoinColumn } from "typeorm"
import { Auth } from './autentication/auth.entity'

@Entity()
export class Company extends BaseEntity {

   @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    companyName: string

    @Column()
    region: string

    @Column()
    city: string

    @Column()
    mainCategory: string

    @Column()
    mainProducts1: string  
    
    @Column()
    mainProducts2: string
    
    @Column()
    mainProducts3: string

    @Column()
    otherProducts1: string  
    
    @Column()
    otherProducts2: string
    
    @Column()
    otherProducts3: string    

    @Column()
    yearCompanyRegistered: string

    @Column()
    numOfEmployees: string

    @Column()
    websiteURL: string

    @Column()
    legalOwner: string

    @Column()
    companyIntroduction: string

    @Column('simple-array', { nullable: true })
    certificates: string[]

    @Column('simple-array', { nullable: true })
    companyLogo: string[]  
    
    @Column({
        default:'None'
    })
    supplierID: string
}
