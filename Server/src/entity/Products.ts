import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Auth } from './autentication/auth.entity';
import { Feedback } from './feedback';
export enum Availability {
  Available = 'available',
  OutOfStock = 'outOfStock',
}
@Entity({ name: 'products' })
export class Products extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  title: string;

  @Column()
  productCategory: string;

  @Column()
  productDescription: string;

  @Column()
  costPerItem: number;

  @Column()
  minimumOrder: string;

  @Column('simple-array', { nullable: true })
  productImage1: string[];
  @Column('simple-array', { nullable: true })
  productImage2: string[];
  @Column('simple-array', { nullable: true })
  productImage3: string[];
  @Column('simple-array', { nullable: true })
  productImage4: string[];

  @Column()
  location: string;

  @Column()
  availability: Availability;

  @Column()
  companyID: string;

  @Column()
  secret_key: string;

  @Column()
  supplierName: string;

  @Column()
  supplierCredentials: string;

  @Column()
  supplier_ID: string;

  @OneToMany(() => Feedback, (feedback) => feedback.product, {
    onDelete: 'CASCADE',
  })
  feedbacks: Feedback[];
}
