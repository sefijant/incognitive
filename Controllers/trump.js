var express = require('express');
var request = require('request');
var app = express();
var bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

exports.apiPOST = function(req, res) {
  request.post({
    headers: {'Content-Type': "application/json", 'Ocp-Apim-Subscription-Key': "580eb3f9f7f64f9aaf4afb69c25ffd40"},
    url:     'https://westus.api.cognitive.microsoft.com/face/v1.0/detect',
    json:   true,
    body:    {'url' : req.body.ur}
    }, function(error, response, body){
        res.send(body[0].faceId);
        //res.send(req.body.ur);
    });
};

exports.apiPOSTid = function(req, res) {
  request.post({
    headers: {'Content-Type': "application/json", 'Ocp-Apim-Subscription-Key': "580eb3f9f7f64f9aaf4afb69c25ffd40"},
    url:     'https://westus.api.cognitive.microsoft.com/face/v1.0/identify',
    json:   true,
    body:    {"personGroupId":"incognitive1", "faceIds":[req.body.bdy.data], "confidenceThreshold": 0.5}
    }, function(error, response, body){
        res.send(body);
    });
};