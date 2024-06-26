"use strict";
const env = require("dotenv").config();

module.exports = {
  TESTNET: {
    env: process.env.IMTBL_ENVIROMENT,
    client_id: process.env.IMTBL_TESTNET_PASSPORT_CLIENT_ID,
    redirect_url: process.env.IMTBL_TESTNET_PASSPORT_LOGIN_REDIRECT_URL,
    logout_url: process.env.IMTBL_TESTNET_PASSPORT_LOGOUT_REDIRECT_URL,
    publishable_key: process.env.IMTBL_TESTNET_PUBLISHABLE_KEY,
    base_url: process.env.IMTBL_TESTNET_BASE_URL
  },
  MAINNET: {        
    env: process.env.IMTBL_ENVIROMENT,
    client_id: process.env.IMTBL_MAINNET_PASSPORT_CLIENT_ID,
    redirect_url: process.env.IMTBL_MAINNET_PASSPORT_LOGIN_REDIRECT_URL,
    logout_url: process.env.IMTBL_MAINNET_PASSPORT_LOGOUT_REDIRECT_URL,
    publishable_key: process.env.IMTBL_MAINNET_PUBLISHABLE_KEY,
    base_url: process.env.IMTBL_MAINNET_BASE_URL
  }
};
