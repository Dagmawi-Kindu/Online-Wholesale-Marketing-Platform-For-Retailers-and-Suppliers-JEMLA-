import * as dotenv from 'dotenv';
dotenv.config();
import cors, { CorsOptions } from 'cors';
import { userRouter } from './routes/routes';
import { authRouter } from './routes/auth.Router';
import { AppDataSource } from './data-source';
import express from 'express';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
  })
);

AppDataSource.initialize()
  .then(async () => {
    console.log('Database started Successfully!');
  })
  .catch((error) => console.log(error));

app.use('/certificates', express.static('public/images/certificates/'));
app.use('/product_images', express.static('public/images/product_images/'));
app.use('/company_logo', express.static('public/images/company_logo/'));
app.use('/trade_liscences', express.static('public/images/trade_liscences/'));
app.use('/kebele_id', express.static('public/images/kebele_id/'));
app.use('/profile_pictures', express.static('public/images/profile_pictures/'));
app.use('/api/auth', authRouter);
app.use('/', userRouter);

app.listen(7000, () => {
  console.log('Server Started Successfully!');
});
