import express from 'express';
import dotenv from 'dotenv';

import bodyParser from 'body-parser';
import cors from 'cors';

import ethereumRoutes from './src/routes/ethereum';
import binanceRoutes from './src/routes/binance';
import bitcoinRoutes from './src/routes/bitcoin';
import errorHandler from './src/middleware/errorHandler';

dotenv.config();

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(cors());
app.use(bodyParser.json());
app.use('/ethereum', ethereumRoutes);
app.use('/binance', binanceRoutes);
app.use('/bitcoin', bitcoinRoutes);
app.use(errorHandler);

module.exports = app;
