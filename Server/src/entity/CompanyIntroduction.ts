import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne,JoinColumn } from "typeorm"
import {Auth} from './autentication/auth.entity'
@Entity()
export class CompanyIntroduction extends BaseEntity {

   @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    companyLogo: string

    @Column()
    companyIntroduction: string    

    @Column('simple-array', { nullable: true })
    companyPhoto: string[]  
   
}
