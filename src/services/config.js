// Arquivo de configuração
require("dotenv").config();

const axios = require("axios");

const urlAPI = process.env.URL_API;

module.exports = {
  axios,
  urlAPI,
};
