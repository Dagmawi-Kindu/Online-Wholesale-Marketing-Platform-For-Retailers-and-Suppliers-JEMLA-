import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Auth } from './entity/autentication/auth.entity';
import { Company } from './entity/CompanyInformation';
import { Feedback } from './entity/feedback';
import { Products } from './entity/Products';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'wholesale_platform',
  synchronize: true,
  logging: false,
  entities: [Auth, Company, Products, Feedback],
  migrations: [],
  subscribers: [],
});
