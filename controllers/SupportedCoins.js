'use strict';

var utils = require('../utils/writer.js');
var SupportedCoins = require('../service/SupportedCoinsService');

module.exports.getSupportedCurrencies = function getSupportedCurrencies (req, res, next) {
  SupportedCoins.getSupportedCurrencies()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
