var Web3 = require("web3");
import { successResponse, errorResponse, uniqueId } from '../helpers';
var provider = "https://data-seed-prebsc-2-s1.binance.org:8545";
//var provider = "https://data-seed-prebsc-1-s2.binance.org:8545";
//var provider = "https://data-seed-prebsc-2-s3.binance.org:8545";
//var provider = "https://bsc-dataseed.binance.org/";
//var provider = "https://bsc-dataseed1.defibit.io/";
//var provider = "https://bscrpc.com";
var web3 = new Web3(provider);
export const createWallet = async (req, res) => {

    try {  
        const ethers = require("ethers");
        const wallet = ethers.Wallet.createRandom()
    return successResponse(req, res, {
        key: wallet.privateKey,
        mnemonic: wallet.mnemonic.phrase,  
        address: wallet.address
    });   
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
  };