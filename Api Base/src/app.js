import dotenv from 'dotenv';

dotenv.config();

import './database';

import express from 'express';

const app = express();

import exampleRoute from './routes/example';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', exampleRoute);

export default app;
