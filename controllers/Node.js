'use strict';

var utils = require('../utils/writer.js');
var Node = require('../service/NodeService');

module.exports.createNode = function createNode (req, res, next) {
  var body = req.swagger.params['body'].value;
  Node.createNode(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNodeById = function getNodeById (req, res, next) {
  var nodeId = req.swagger.params['nodeId'].value;
  Node.getNodeById(nodeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNodes = function getNodes (req, res, next) {
  Node.getNodes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stopNode = function stopNode (req, res, next) {
  var nodeId = req.swagger.params['nodeId'].value;
  var body = req.swagger.params['body'].value;
  Node.stopNode(nodeId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateNode = function updateNode (req, res, next) {
  var nodeId = req.swagger.params['nodeId'].value;
  var body = req.swagger.params['body'].value;
  Node.updateNode(nodeId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
