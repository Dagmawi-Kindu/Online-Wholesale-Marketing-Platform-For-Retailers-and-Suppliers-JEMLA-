import { Entity, PrimaryGeneratedColumn, Column, BaseEntity,OneToMany,ManyToOne, JoinColumn} from "typeorm"
import { Auth } from "./autentication/auth.entity"
import { Products } from "./Products"
export enum feedBackType{
    Suggestion = 'suggestion',
    SomethingIsNotRight = 'something_is_not_right',
    Compliment = 'compliment'
}
@Entity({ name: 'feedback' })
export class Feedback extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: number
    
    @Column()
    providedFeedback: string   

    @Column()
    feedBackType: feedBackType

    // @Column()
    // product_ID: string

    @ManyToOne(
        () => Products,
        products => products.feedbacks, { onDelete: 'CASCADE' }
    )
    @JoinColumn({
        name: 'product_ID'
    })
    product: Products

     @ManyToOne(
        () => Auth,
        auth => auth.feedbacks
    )
    @JoinColumn({
        name: 'supplier_ID'
    })
    supplier: Auth
}
