var request = require('request');

exports.apiPOST = function(req, res) {
  request.post({
    headers: {'Content-Type': "application/json", 'Ocp-Apim-Subscription-Key': "580eb3f9f7f64f9aaf4afb69c25ffd40"},
    url:     'https://westus.api.cognitive.microsoft.com/face/v1.0/detect',
    json:   true,
    body:    {"url":req.ur}
    }, function(error, response, body){
        res.send(body[0].faceId);
    });
};

exports.apiPOSTid = function(req, res) {
  request.post({
    headers: {'Content-Type': "application/json", 'Ocp-Apim-Subscription-Key': "580eb3f9f7f64f9aaf4afb69c25ffd40"},
    url:     'https://westus.api.cognitive.microsoft.com/face/v1.0/identify',
    json:   true,
    body:    {"personGroupId":"incognitive1", "faceIds":[req.bdy], "confidenceThreshold": 0.6}
    }, function(error, response, body){
        res.send(body);
    });
};