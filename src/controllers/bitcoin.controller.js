import { successResponse, errorResponse, uniqueId } from '../helpers';
const bitcore = require("bitcore-lib");
const Insight = require("bitcore-explorers").Insight;
var insight = new Insight("livenet");
export const createWallet = async (req, res) => {

    try {  
    const privateKey = new bitcore.PrivateKey();
    const myAddress = privateKey.toAddress();
    return successResponse(req, res, {key: privateKey.toString(),  address: myAddress.toString()});   
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
  };