import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne,OneToMany, JoinColumn } from "typeorm"
import { Company } from "../CompanyInformation"
import { Feedback } from "../feedback"
import { Products } from "../Products"
//import { User } from "./User"
export enum Role {
    Admin = 'admin',
    Supplier = 'supplier',
    Retailer = 'retailer'
}
export enum Approval{
    Approved = 'approved',
    Pending = 'pending',
    Declined = 'declined',
}
export enum accountStatus{
    Enabled = 'enabled',
    Disabled = 'disabled'
}
@Entity({ name: 'auth' })
export class Auth extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: number
    
    @Column()
    firstName: string   

    @Column()
    middleName: string

    @Column()
    lastName: string

    @Column()
    email: string    

    @Column()
    tradeLiscenceNumber: string

    @Column('simple-array', { nullable: true })
    tradeLiscence: string[]

    @Column('simple-array', { nullable: true })
    kebeleID: string[]

    @Column('simple-array', { nullable: true })
    profilePicture: string[] 

    @Column()
    role: Role

    @Column()
    phoneNumber: string

    @Column()
    password: string

    @Column({
        default: Approval.Pending
    })
    approval: Approval

    @Column({
     default: accountStatus.Enabled   
    })
    accountStatus: string  
  
    @OneToMany(
        () => Feedback,
        feedback => feedback.supplier
    )
    @JoinColumn()
    feedbacks: Feedback[]

}
