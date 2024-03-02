import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
dotenv.config();
const app = express();
import cookieParser from 'cookie-parser';

import router from './router/index';

connectDB();
//cookies and filemiddleware
app.use(cors());
app.use(cookieParser());

// morgan middlewares
import morgan from 'morgan';
app.use(morgan('tiny'));

// regular middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router middleware
app.use(router);

export default app;
