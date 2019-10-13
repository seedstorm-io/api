'use strict';

var utils = require('../utils/writer.js');
var Payment = require('../service/PaymentService');

module.exports.processPayment = function processPayment (req, res, next) {
  var body = req.swagger.params['body'].value;
  Payment.processPayment(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
