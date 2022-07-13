import express from 'express';
import validate from 'express-validation';

import * as bitcoinController from '../controllers/bitcoin.controller';
const router = express.Router();

router.get('/create/wallet', bitcoinController.createWallet);

module.exports = router;
