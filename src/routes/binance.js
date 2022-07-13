import express from 'express';
import validate from 'express-validation';
import * as binanceController from '../controllers/binance.controller';
const router = express.Router();

router.get('/create/wallet', binanceController.createWallet);


module.exports = router;